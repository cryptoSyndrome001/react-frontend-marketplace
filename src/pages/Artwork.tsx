import React, {FC} from "react";
import HeroArtwork from "components/HeroArtwork";
import ArtworkDescription from "components/ArtworkDescription";
import BidDetails from "components/BidDetails";
import ArtworkCard from "components/Cards/ArtworkCard";
import ActivityCard from "../components/Cards/ActivityCard";

const Artwork: FC = () => {
    return (
        <>
            <HeroArtwork/>
            <div className="artwork-body-dark">
                <div className="container-fluid">
                    <div className="artwork-body-inr">
                        <div className="row row-custom">
                            <ArtworkDescription/>
                            <div className="col-lg-7 col-right-otr">
                                <div className="col-right-inr">
                                    <BidDetails/>
                                    <div className="activity-details">
                                        <h4 className="heading-h4 activity-head">Activity</h4>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                        <ActivityCard/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="like-this-dark">
                <div className="container-fluid">
                    <div className="live-auction-inr">
                        <div className="heading-otr">
                            <div className="head-otr">
                                <h3 className="heading heading-h3">You May Also Like</h3>
                            </div>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom">
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artwork
