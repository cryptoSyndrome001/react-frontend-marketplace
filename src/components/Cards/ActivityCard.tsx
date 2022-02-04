import React, {FC} from 'react'

const ActivityCard: FC = () => {
    return (
        <div className="place-bid-main">
            <a href="#" className="img-otr">
                <img className="img-creator" src="./img/user-Image16.jpg" alt="creator-img"/>
            </a>
            <div className="bid-content">
                <div className="content-left">
                    <p className="body-mb bid-otr">
                        <span className="bid">Bid placed</span>
                        <span className="by body-m">by</span>
                        <a href="#" className="user">Frogi Leoti</a>
                    </p>
                    <p className="body-s date">
                        At 2:30 PM on 19th June, 2021
                    </p>
                </div>
                <div className="content-right">
                    <p className="eth heading-h5">3.50 ETH</p>
                    <p className="dollor body-sb">$2,505</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard
