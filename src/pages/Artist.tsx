import React, {FC, useEffect} from "react";
import UserProfileCard from "components/Cards/UserProfileCard";
import ArtworkCard from "components/Cards/ArtworkCard";
import {renderSelect, renderTabs} from "utils";

const Artist: FC = () => {
    useEffect(() => {
        renderSelect()
        renderTabs()
    }, []);
    return (
        <>
            <UserProfileCard/>
            <div className="explore-artwork-creator-dark">
                <div className="container-fluid">
                    <div className="explore-artwork-inr">
                        <div className="teb-main">
                            <div className="tab-otr">
                                <div className="tab-inr">
                                    <ul className="tabs">
                                        <li className="tab-link tab-1 active" data-tab="1">
                                            <p className="tab-p body-sb">On Sale 23</p>
                                        </li>
                                        <li className="tab-link tab-2" data-tab="2">
                                            <p className="tab-p body-sb">Owned 16</p>
                                        </li>
                                        <li className="tab-link tab-3" data-tab="3">
                                            <p className="tab-p body-sb">Created 38</p>
                                        </li>
                                        <li className="tab-link tab-4" data-tab="4">
                                            <p className="tab-p body-sb">Activity</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom-main">
                            <div id="tab-1" className="tab-content active">
                                <div className="row row-custom-inr">
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-content">
                                <div className="row row-custom-inr">
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-content">
                                <div className="row row-custom-inr">
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-content">
                                <div className="row row-custom-inr">
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                    <ArtworkCard classes={['col-lg-3']}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist
