import React, {FC} from "react";
import Countdown, {CountdownRendererFn} from 'react-countdown';
import {Link} from "react-router-dom";


interface IProps {
    classes?: string[];
}

const ArtworkCard: FC<IProps> = ({classes}) => {
    // Renderer callback with condition
    const renderer:  CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
            return <div className="body-sb countdown" >{hours}:{minutes}:{seconds}</div>;
    };
    return (
        <div className={`col-otr ${classes? classes.join(" "): ''}`}>
            <div className="col-inr box1">
                <div className="img-otr">
                    <Link to="/artworks/something" className="tilt-otr img-tilt" data-tilt>
                        <img className="img-inr img-fluid" src="./img/cover-img8.jpg" alt="artwork-img"/>
                    </Link>
                    <div className="timer-otr">
                        <Countdown
                            date={Date.now() + 43200000}
                            renderer={renderer}
                            zeroPadTime={2}
                        />
                    </div>
                </div>
                <div className="time-main">
                    <div className="users-main">
                        <div className="create-img-otr">
                            <a href="#" className="create-img left-create">
                                <img className="img-create" src="./img/user-Image16.jpg" alt="create-img"/>
                            </a>
                            <div className="hover-box hover-box1">
                                <div className="hover-box-inr">
                                    <div className="user-info">
                                        <a href="" className="create-img">
                                            <img className="img-create" src="./img/user-Image16.jpg"
                                                 alt="create-img"/>
                                        </a>
                                        <a href="" className="btn-outline2 follow-btn">Follow</a>
                                    </div>
                                    <p className="post-title body-lb">The Lucky Being</p>
                                    <a href="#" className="address-main">
                                        <p className="address body-s">0xd07dc4262bcdb...2430</p>
                                        <svg className="copy-icon" width="18" height="18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.636 12.636H15a2 2 0 002-2V3a2 2 0 00-2-2H7.364a2 2 0 00-2 2v2.364"
                                                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M10.636 5.364H3a2 2 0 00-2 2V15a2 2 0 002 2h7.636a2 2 0 002-2V7.364a2 2 0 00-2-2z"
                                                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    <p className="post-desc body-s">
                                        Vitae ac magna nunc facilisi diam Malesuada aliquam felis
                                        facilisis gravida lectus iaculis...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="create-img-otr">
                            <a href="#" className="create-img">
                                <img className="img-create" src="./img/user-Image15.jpg" alt="create-img"/>
                                    <div className="check-otr">
                                        <svg className="check-icon" width="8" height="8" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.583 2.25l-3.5 3.5L1.333 4" stroke="#fff" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            </a>
                            <div className="hover-box hover-box2">
                                <div className="hover-box-inr">
                                    <div className="user-info">
                                        <a href="#" className="create-img">
                                            <img className="img-create" src="./img/user-Image15.jpg"
                                                 alt="create-img"/>
                                                <div className="check-otr">
                                                    <svg className="check-icon" width="10" height="10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.438 2.813L4.061 7.188 1.876 5" stroke="#fff"
                                                              strokeWidth="2" strokeLinecap="round"
                                                              strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                        </a>
                                        <a href="" className="btn-outline2 follow-btn">Follow</a>
                                    </div>
                                    <p className="post-title body-lb">The Lucky Being</p>
                                    <a href="" className="address-main">
                                        <p className="address body-s">0xd07dc4262bcdb...2430</p>
                                        <svg className="copy-icon" width="18" height="18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.636 12.636H15a2 2 0 002-2V3a2 2 0 00-2-2H7.364a2 2 0 00-2 2v2.364"
                                                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M10.636 5.364H3a2 2 0 00-2 2V15a2 2 0 002 2h7.636a2 2 0 002-2V7.364a2 2 0 00-2-2z"
                                                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    <p className="post-desc body-s">
                                        Vitae ac magna nunc facilisi diam Malesuada aliquam felis
                                        facilisis gravida lectus iaculis...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heart-main">
                        <a className="heart-otr">
                            <svg className="heart-icon" width="18" height="17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 15.08S1 10.6 1 5.16a4.16 4.16 0 018-1.603h0a4.16 4.16 0 018 1.603c0 5.44-8 9.92-8 9.92z"
                                    stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <p className="body-sb num">98 Likes</p>
                    </div>
                </div>
                <Link to="/artworks/something" className="body-mb box-head">Wow! That Brain is Floating</Link>
                <div className="bid-main">
                    <p className="body-sb bid">Current Bid</p>
                    <p className="body-mb eth">0.25 ETH</p>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard
