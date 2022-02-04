import React, {FC} from 'react'
import Countdown, {CountdownRendererFn} from "react-countdown";

const BidDetails: FC = () => {

    const renderer: CountdownRendererFn = ({hours, minutes, seconds}) => {
        return (
            <div id="clock" className="timer">
                <div className="hours-main main">
                    <p className="heading-h3 time-inr" id="hours">{hours}</p>
                    <p className="hours-p body-mb">Hours</p>
                </div>
                <div className="minutes-main main">
                    <p className="heading-h3 time-inr" id="minutes">{minutes}</p>
                    <p className="minutes-p body-mb">Minutes</p>
                </div>
                <div className="seconds-main main">
                    <p className="heading-h3 time-inr" id="seconds">{seconds}</p>
                    <p className="seconds-p body-mb">Seconds</p>
                    <p className="seconds-p-2 body-mb">Sec</p>
                </div>
            </div>
        )
    }
    return (
        <div className="bid-details">
            <h4 className="heading-h4 bid-head">Bid Details</h4>
            <div className="boxes-main">
                <div className="bid-main">
                    <p className="bid body-mb">Current Bid</p>
                    <h3 className="heading-h3 bid-head">0.0245 ETH</h3>
                    <p className="dollor body-mb">$2,505</p>
                </div>
                <div className="auction-main">
                    <p className="body-mb acution">Auction Ending</p>
                    <Countdown
                        date={Date.now() + 43200000}
                        renderer={renderer}
                        zeroPadTime={2}
                    />
                </div>
            </div>
            <div className="action-otr">
                <a href="" className="btn-fill btn-bid">Place a Bid</a>
            </div>
        </div>
    )
}

export default BidDetails
