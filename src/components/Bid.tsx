import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import {IState} from "pages/ComingSoon";

const Bid: FC = () => {
    const [state, setState] = useState<IState>({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
    });
    const deadline = useMemo(() => {
        return new Date('November 09, 2021 12:00:00').getTime()
    }, []);
    const [x, setX] = useState<null | NodeJS.Timeout>(null);


    const count = useCallback(
        () => {
            let now = new Date().getTime()
            let t = deadline - now
            let dd = Math.floor(t / (1000 * 60 * 60 * 24))
            let hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
            let ss = Math.floor((t % (1000 * 60)) / 1000)

            let days = dd < 10 ? '0' + dd : dd
            let hours = hh < 10 ? '0' + hh : hh
            let minutes = mm < 10 ? '0' + mm : mm
            let seconds = ss < 10 ? '0' + ss : ss

            setState({ days, minutes, hours, seconds })

            if (t < 0) {
                if(x) clearInterval(x)
                setState({
                    days: 0,
                    minutes: 0,
                    hours: 0,
                    seconds: 0,
                })
            }
        },
        [],
    );

    useEffect(() => {
        let y = setInterval(count, 1000)
        setX(y)
        return () => {
            if(x) clearInterval(x)
        }
    }, []);
    return (
        <div className="hero-main-dark">
            <div className="container-fluid">
                <div className="hero-inr">
                    <div className="row row-custom">
                        <div className="col-lg-6 col-img-otr">
                            <div className="col-img-inr">
                                <a href="#" className="img-otr img-tilt" data-tilt={true}>
                                    <img className="artwork-img img-fluid" src="./img/hero-images-home1.jpg"
                                         alt="img"/>
                                </a>
                                <div className="create-otr">
                                    <div className="create-inr">
                                        <a href="#" className="create-img">
                                            <img className="img-create" src="./img/user-Image18.jpg"
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
                                        <div className="create-content">
                                            <p className="body-s create-p">Owned by</p>
                                            <a href="" className="body-sb create-pb">Meta Boss</a>
                                        </div>
                                        <div className="hover-box">
                                            <div className="hover-box-inr">
                                                <div className="user-info">
                                                    <a href="" className="create-img">
                                                        <img className="img-create" src="./img/user-Image18.jpg"
                                                             alt="create-img"/>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" strokeWidth="2"
                                                                          strokeLinecap="round"
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
                                    <div className="create-inr">
                                        <a href="#" className="create-img">
                                            <img className="img-create" src="./img/user-Image17.jpg"
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
                                        <div className="create-content">
                                            <p className="body-s create-p">Created by</p>
                                            <a href="" className="body-sb create-pb">NFT King</a>
                                        </div>
                                        <div className="hover-box">
                                            <div className="hover-box-inr">
                                                <div className="user-info">
                                                    <a href="" className="create-img">
                                                        <img className="img-create" src="./img/user-Image17.jpg"
                                                             alt="create-img"/>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" strokeWidth="2"
                                                                          strokeLinecap="round"
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
                            </div>
                        </div>
                        <div className="col-lg-6 col-content-otr">
                            <div className="col-content-inr">
                                <h1 className="heading-h1 heading titleGreathorned">
                                    The Pretty Fantasy World of Mine
                                </h1>
                                <div className="boxes-main">
                                    <div className="bid-main">
                                        <p className="bid body-mb">Current Bid</p>
                                        <h3 className="heading-h3 bid-head">0.0245 ETH</h3>
                                        <p className="dollor body-mb">$2,505</p>
                                    </div>
                                    <div className="auction-main">
                                        <p className="body-mb acution">Auction Ending</p>
                                        <div id="clock" className="timer">
                                            <div className="hours-main main">
                                                <p className="heading-h3 time-inr" id="days">{state.days}</p>
                                                <p className="hours-p body-mb">Days</p>
                                            </div>
                                            <div className="hours-main main">
                                                <p className="heading-h3 time-inr" id="hours">{state.hours}</p>
                                                <p className="hours-p body-mb">Hours</p>
                                            </div>
                                            <div className="minutes-main main">
                                                <p className="heading-h3 time-inr" id="minutes">{state.minutes}</p>
                                                <p className="minutes-p body-mb">Minutes</p>
                                            </div>
                                            <div className="seconds-main main">
                                                <p className="heading-h3 time-inr" id="seconds">{state.seconds}</p>
                                                <p className="seconds-p body-mb">Seconds</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action-otr">
                                    <a href="" className="btn-fill btn-create">Place a Bid</a>
                                    <a href="#" className="btn-outline2 btn-wallet">View
                                        Artwork</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bid
