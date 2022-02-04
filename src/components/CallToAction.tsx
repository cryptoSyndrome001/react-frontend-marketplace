import React, {FC} from "react";

const CallToAction: FC = () => {
    return (
        <div className="call-to-action">
            <div className="container-fluid">
                <div className="call-to-action-inr">
                    <div className="overlay">
                        <div className="content">
                            <h2 className="heading-h2 heading">
                                Create, Sell & Collect <br/> NFTs at BLAH
                            </h2>
                            <p className="desc body-m">
                                Aliquam viverra enim commodo sed consequat tempor <br/> sit nisl cursus lectus.
                            </p>
                            <div className="action-otr">
                                <a href="#" className="btn-fill-white btn-create">Create</a>
                                <a href="#" className="btn-outline-white btn-wallet">Connect
                                    Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
