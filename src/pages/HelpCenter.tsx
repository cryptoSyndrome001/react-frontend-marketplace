import React, {FC, useEffect} from "react";
import articles from "components/articles";
import {Link} from "react-router-dom";
import {renderTabs} from "utils";

const HelpCenter: FC = () => {
    useEffect(() => {
        renderTabs()
    }, []);

    return (
        <div className="Help-center-main-dark">
            <div className="container-fluid">
                <div className="Help-center-inr">
                    <div className="heading-otr">
                        <div className="head-otr">
                            <h3 className="heading heading-h3">Help Center</h3>
                        </div>
                    </div>
                    <div className="tab-otr">
                        <ul className="tabs">
                            <li className="tab-link tab-1 active" data-tab="1">
                                <p className="tab-p body-sb">Getting Started</p>
                            </li>
                            <li className="tab-link tab-2" data-tab="2">
                                <p className="tab-p body-sb">Create, Sell & Connect</p>
                            </li>
                            <li className="tab-link tab-3" data-tab="3">
                                <p className="tab-p body-sb">Artworks & Creators</p>
                            </li>
                            <li className="tab-link tab-4" data-tab="4">
                                <p className="tab-p body-sb">FAQs</p>
                            </li>
                            <li className="tab-link tab-5" data-tab="5">
                                <p className="tab-p body-sb">Connect Wallet</p>
                            </li>
                        </ul>
                    </div>
                    <span className="line"/>
                    <div className="row row-custom-main">
                        <div id="tab-1" className="tab-content active">
                            <div className="row row-question">
                                {articles.map((article, i) => (
                                    <div key={article.slug} className="col-lg-6 col-q-otr">
                                        <div className={`col-q-inr box-${i+1}`}>
                                            <div className="content-main">
                                                <Link to={`/articles/${article.slug}`} className="link">
                                                <span className="icon-otr">
                                                    <svg className="text-icon" width="18" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                        d="M16.2 20.199H1.8a.8.8 0 01-.8-.8V1.8a.8.8 0 01.8-.8h9.6L17 6.6v12.8a.8.8 0 01-.8.799v0z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/><path
                                                        d="M11.4 1v5.6H17M5.799 11.4h6.4M5.799 14.6h6.4"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/></svg>
                                                </span>
                                                    <p className="text body-mb">{article.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-2" className="tab-content">
                            <div className="row row-question">
                                {articles.map((article, i) => (
                                    <div key={article.slug} className="col-lg-6 col-q-otr">
                                        <div className={`col-q-inr box-${i+1}`}>
                                            <div className="content-main">
                                                <Link to={`/articles/${article.slug}`} className="link">
                                                <span className="icon-otr">
                                                    <svg className="text-icon" width="18" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                        d="M16.2 20.199H1.8a.8.8 0 01-.8-.8V1.8a.8.8 0 01.8-.8h9.6L17 6.6v12.8a.8.8 0 01-.8.799v0z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/><path
                                                        d="M11.4 1v5.6H17M5.799 11.4h6.4M5.799 14.6h6.4"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/></svg>
                                                </span>
                                                    <p className="text body-mb">{article.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-3" className="tab-content">
                            <div className="row row-question">
                                {articles.map((article, i) => (
                                    <div key={article.slug} className="col-lg-6 col-q-otr">
                                        <div className={`col-q-inr box-${i+1}`}>
                                            <div className="content-main">
                                                <Link to={`/articles/${article.slug}`} className="link">
                                                <span className="icon-otr">
                                                    <svg className="text-icon" width="18" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                        d="M16.2 20.199H1.8a.8.8 0 01-.8-.8V1.8a.8.8 0 01.8-.8h9.6L17 6.6v12.8a.8.8 0 01-.8.799v0z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/><path
                                                        d="M11.4 1v5.6H17M5.799 11.4h6.4M5.799 14.6h6.4"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/></svg>
                                                </span>
                                                    <p className="text body-mb">{article.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-4" className="tab-content">
                            <div className="row row-question">
                                {articles.map((article, i) => (
                                    <div key={article.slug} className="col-lg-6 col-q-otr">
                                        <div className={`col-q-inr box-${i+1}`}>
                                            <div className="content-main">
                                                <Link to={`/articles/${article.slug}`} className="link">
                                                <span className="icon-otr">
                                                    <svg className="text-icon" width="18" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                        d="M16.2 20.199H1.8a.8.8 0 01-.8-.8V1.8a.8.8 0 01.8-.8h9.6L17 6.6v12.8a.8.8 0 01-.8.799v0z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/><path
                                                        d="M11.4 1v5.6H17M5.799 11.4h6.4M5.799 14.6h6.4"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/></svg>
                                                </span>
                                                    <p className="text body-mb">{article.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-5" className="tab-content">
                            <div className="row row-question">
                                {articles.map((article, i) => (
                                    <div key={article.slug} className="col-lg-6 col-q-otr">
                                        <div className={`col-q-inr box-${i+1}`}>
                                            <div className="content-main">
                                                <Link to={`/articles/${article.slug}`} className="link">
                                                <span className="icon-otr">
                                                    <svg className="text-icon" width="18" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                        d="M16.2 20.199H1.8a.8.8 0 01-.8-.8V1.8a.8.8 0 01.8-.8h9.6L17 6.6v12.8a.8.8 0 01-.8.799v0z"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/><path
                                                        d="M11.4 1v5.6H17M5.799 11.4h6.4M5.799 14.6h6.4"
                                                        stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/></svg>
                                                </span>
                                                    <p className="text body-mb">{article.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-12 col-btn-otr">
                            <div className="col-btn-inr">
                                <h5 className="head heading-h5">Unable to Find Your Answer?</h5>
                                <Link to="/contact-us" className="btn-fill btn-more">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter
