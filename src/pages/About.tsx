import React, {FC} from "react";
import StatisticCard from "components/Cards/StatisticCard";
import HowItWorks from "components/HowItWorks";
import PostCard from "components/Cards/PostCard";
import CallToAction from "components/CallToAction";

const About: FC = () => {
    return (
        <>
            <div className="about-main-dark">
                <div className="container-fluid">
                    <div className="row row-content">
                        <div className="col-lg-5 col-head-otr">
                            <div className="col-head-inr">
                                <h2 className="head heading-h2">Create, Sell & Collect Wonderful NFTs at BLAH Very
                                    Fast</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-text-otr">
                            <div className="col-text-inr">
                                <p className="desc body-m">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour,
                                    or randomised words which don't look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="row row-imgs">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-1">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img4.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img8.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img16.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-2">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img12.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img6.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img2.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-3">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img1.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img3.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img9.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-4">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img14.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img10.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img15.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-5">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img2.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img8.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img17.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-img-otr box-6">
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img9.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img4.jpg" alt="img"/>
                                </div>
                                <div className="col-img-inr">
                                    <img className="about-img img-fluid" src="./img/cover-img16.jpg" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistics-main-dark">
                <div className="container-fluid">
                    <div className="wrapper">
                        <h3 className="head heading-h3">BLAH Statistics</h3>
                    </div>
                    <div className="row row-statistics">
                        <StatisticCard hasPrice/>
                        <StatisticCard/>
                        <StatisticCard/>
                        <StatisticCard/>
                    </div>
                </div>
            </div>
            <HowItWorks/>
            <div className="letest-blog-main-dark">
                <div className="container-fluid">
                    <div className="latest-blog-inr">
                        <div className="heading-otr">
                            <h3 className="heading heading-h3">Latest Posts of NFTs</h3>
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">Read All Blogs</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom">
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                        </div>
                        <div className="responsive">
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">Read All Blogs</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction/>
        </>
    )
}

export default About
