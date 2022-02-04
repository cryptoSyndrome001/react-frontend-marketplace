import React, {FC} from "react";
import {useParams} from "react-router-dom";
import articles from "components/articles";

const Articles: FC = () => {
    const { slug } = useParams<{slug: string}>();

    const article = articles.filter((a) => a.slug === slug)[0]
    return (
        <div className="article-detail-main-dark">
            <div className="container-fluid">
                <div className="row row-detail">
                    <div className="col-lg-8 col-detail-otr">
                        <div className="col-detail-inr">
                            <h2 className="head heading-h2">{article.title}</h2>
                        </div>
                    </div>
                    <span className="line"/>
                    <div className="col-lg-8 col-detail-otr-2">
                        {article.details}
                    </div>
                    <div className="wrapper">
                        <div className="row row-icon">
                            <div className="col-lg-8 col-icon-otr">
                                <div className="col-icon-inr">
                                    <h5 className="heading-icon heading-h5">Did This Article Answer Your Question?</h5>
                                    <ul className="icon-main">
                                        <li className="icon-otr">
                                            <a href="#" className="icon-inr">
                                                <svg className="smile-icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                                                        stroke="#366CE3" strokeWidth="2" strokeMiterlimit="10"/>
                                                    <path
                                                        d="M11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#366CE3"/>
                                                    <path
                                                        d="M11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#366CE3"/>
                                                    <path d="M21.198 22a6.002 6.002 0 00-10.395 0" stroke="#366CE3"
                                                          strokeWidth="2" strokeLinecap="round"
                                                          strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-otr">
                                            <a href="#" className="icon-inr">
                                                <svg className="smile-icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                                                        stroke="#366CE3" strokeWidth="2" strokeMiterlimit="10"/>
                                                    <path d="M11 20h10" stroke="#366CE3" strokeWidth="2"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path
                                                        d="M11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#366CE3"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-otr">
                                            <a href="#" className="icon-inr">
                                                <svg className="smile-icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path
                                                        d="M11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#366CE3"/>
                                                    <path d="M21.196 19A6.002 6.002 0 0110.8 19" stroke="#366CE3"
                                                          strokeWidth="2" strokeLinecap="round"
                                                          strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
