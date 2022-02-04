import React, {FC, useEffect} from "react";
import {renderTabs} from "../utils";

interface IProps {
    classes?: string[]
}
const HowItWorks: FC<IProps> = ({classes}) => {
    useEffect(() => {
        renderTabs()
    }, []);

    return (
        <div className={`work-main-dark ${classes ? classes.join(' '): ''}`}>
            <div className="container-fluid">
                <div className="wrapper">
                    <h3 className="head heading-h3">How BLAH Works</h3>
                    <div className="teb-main">
                        <ul className="tabs">
                            <li className="tab-link-work tab-work1 active" data-tab="work1">
                                <p className="tab-p body-sb">For Artists</p>
                            </li>
                            <li className="tab-link-work tab-work2" data-tab="work2">
                                <p className="tab-p body-sb">For Collectors</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row-work">
                    <div id="tab-work1" className="tab-content active">
                        <div className="row row-work-inr">
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box1">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2"
                                                      d="M5 24a2 2 0 002 2h20a1 1 0 001-1V11a1 1 0 00-1-1H7a2 2 0 01-2-2v16z"
                                                      fill="#fff"/>
                                                <path
                                                    d="M5 8v16a2 2 0 002 2h20a1 1 0 001-1V11a1 1 0 00-1-1H7a2 2 0 01-2-2zm0 0a2 2 0 012-2h17"
                                                    stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M22.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#fff"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Set Up Your Wallet</h4>
                                    </div>
                                    <p className="desc body-m">Set up your wallet and then you can create, sell &
                                        collect NFTs at BLAH.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box2">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2" d="M16 16H5.5V6.5a1 1 0 011-1H16V16z" fill="#000"/>
                                                <path
                                                    d="M25.5 5.5h-19a1 1 0 00-1 1v19a1 1 0 001 1h19a1 1 0 001-1v-19a1 1 0 00-1-1zM16 5.5v21M26.5 16h-21"
                                                    stroke="#000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Add Your NFTs</h4>
                                    </div>
                                    <p className="desc body-m">After setting up your wallet, you can add your NFTs on
                                        Ethoz.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box3">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2"
                                                      d="M7.818 18h15.695a2 2 0 001.967-1.642L27 8H6l1.818 10z"
                                                      fill="#fff"/>
                                                <path
                                                    d="M23 23H8.727L5.24 3.821A1 1 0 004.256 3H2M10 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM23 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                    stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M7.818 18h15.695a2 2 0 001.967-1.642L27 8H6" stroke="#fff"
                                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Sell Your NFTs</h4>
                                    </div>
                                    <p className="desc body-m">After adding your NFTs, you can list your NFTs for
                                        sale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-work2" className="tab-content">
                        <div className="row row-work-inr">
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box1">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2"
                                                      d="M5 24a2 2 0 002 2h20a1 1 0 001-1V11a1 1 0 00-1-1H7a2 2 0 01-2-2v16z"
                                                      fill="#fff"/>
                                                <path
                                                    d="M5 8v16a2 2 0 002 2h20a1 1 0 001-1V11a1 1 0 00-1-1H7a2 2 0 01-2-2zm0 0a2 2 0 012-2h17"
                                                    stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M22.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#fff"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Set Up Your Wallet</h4>
                                    </div>
                                    <p className="desc body-m">Set up your wallet and then you can create, sell &
                                        collect NFTs at BLAH.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box2">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2" d="M16 16H5.5V6.5a1 1 0 011-1H16V16z" fill="#000"/>
                                                <path
                                                    d="M25.5 5.5h-19a1 1 0 00-1 1v19a1 1 0 001 1h19a1 1 0 001-1v-19a1 1 0 00-1-1zM16 5.5v21M26.5 16h-21"
                                                    stroke="#000" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Add Your NFTs</h4>
                                    </div>
                                    <p className="desc body-m">After setting up your wallet, you can add your NFTs on
                                        Ethoz.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-work-otr">
                                <div className="col-work-inr box3">
                                    <div className="icon-otr">
                                        <div className="icon-inr">
                                            <span className="bg-icon"></span>
                                            <svg className="icon" width="32" height="32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity=".2"
                                                      d="M7.818 18h15.695a2 2 0 001.967-1.642L27 8H6l1.818 10z"
                                                      fill="#fff"/>
                                                <path
                                                    d="M23 23H8.727L5.24 3.821A1 1 0 004.256 3H2M10 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM23 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                    stroke="#fff" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M7.818 18h15.695a2 2 0 001.967-1.642L27 8H6" stroke="#fff"
                                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h4 className="heading heading-h4">Sell Your NFTs</h4>
                                    </div>
                                    <p className="desc body-m">After adding your NFTs, you can list your NFTs for
                                        sale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
