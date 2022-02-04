import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import FaceBookIcon from "components/icons/FaceBookIcon";
import DiscordIcon from "components/icons/DiscordIcon";
import InstagramIcon from "components/icons/InstagramIcon";

export interface IState {
    days: number | string;
    minutes: number | string;
    hours: number | string;
    seconds: number | string;
}
const ComingSoon: FC = () => {
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
        <div className="comming-soon-main-dark">
            <div className="container-fluid">
                <div className="row row-soon">
                    <div className="col-lg-6 content-otr">
                        <div className="content-inr">
                            <div className="logo-otr">
                                <a href="#">
                                    <img className="logo" src="./img/brand-logo.svg" alt="logo"/>
                                </a>
                                <div className="icon-otr">
                                    <ul className="icon-ul">
                                        <FaceBookIcon/>
                                        <DiscordIcon/>
                                        <InstagramIcon/>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h1 className="heading heading-h1">Utopian NFT <br/> Coming Soon</h1>
                                <p className="desc body-m">You will be able to mint, sell & collect NFTs depicting utopian cities.</p>
                                <div className="auction-main">
                                    <div id="clock" className="timer">
                                        <div className="hours-main main">
                                            <p className="heading-h3 time-inr" id="days">{state.days}</p>
                                            <p className="hours-p body-mb time">Days</p>
                                        </div>
                                        <div className="hours-main main">
                                            <p className="heading-h3 time-inr" id="hours">{state.hours}</p>
                                            <p className="hours-p body-mb time">Hours</p>
                                        </div>
                                        <div className="minutes-main main">
                                            <p className="heading-h3 time-inr" id="minutes">{state.minutes}</p>
                                            <p className="minutes-p body-mb time">Minutes</p>
                                        </div>
                                        <div className="minutes-main main">
                                            <p className="heading-h3 time-inr" id="seconds">{state.seconds}</p>
                                            <p className="minutes-p body-mb time">Seconds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-otr">
                                <h5 className="head heading-h5">Get Latest Updates</h5>
                                <div className="footer" id="mc_embed_signup">
                                    <form className="form-main validate" action="https://world.us6.list-manage.com/subscribe/post?u=14d7d084505aa68a61c764130&amp;id=8b8a88047d" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" method="post" target="_blank"
                                          noValidate>
                                        <div className="input-otr">
                                            <input className="email input" type="email" name="EMAIL" tabIndex={-1}
                                                   placeholder="Your Email Address" required/>
                                        </div>
                                        <div style={{position: "absolute", left: "-5000px;"}} aria-hidden="true"><input
                                            type="hidden" name="b_14d7d084505aa68a61c764130_8b8a88047d" tabIndex={-1}
                                            value=""/></div>
                                        <div className="action-otr">
                                            <input className="button body-sb" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<img className="circle-img" src="./img/soon-circles.png" alt="circle"/>*/}
                </div>
            </div>
            <img className="soon-img" src="./img/comming-soon-2.webp" alt="img"/>
        </div>
    )
}

export default ComingSoon
