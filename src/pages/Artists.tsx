import React, {FC, useEffect} from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import {renderSelect} from "../utils";

const Artists: FC = () => {
    useEffect(() => {
        renderSelect()
    }, []);
    return (
        <div className="creator-main-dark">
            <div className="container-fluid">
                <div className="creator-main-inr">
                    <div className="heading-otr">
                        <div className="head-otr">
                            <h3 className="heading heading-h3">Explore Artists</h3>
                        </div>
                        <select id="year">
                            <option className="linkk" value="hide">Sort by</option>
                            <option className="linkk" value="2010">All Artworks</option>
                            <option className="linkk" value="2011">Sort by</option>
                            <option className="linkk" value="2012">All Artworks</option>
                            <option className="linkk" value="2013">Sort by</option>
                        </select>
                    </div>
                    <span className="line"></span>
                    <div className="row row-custom">
                        <ArtistCard/>
                        <ArtistCard/>
                        <ArtistCard/>
                        <ArtistCard/>
                        <ArtistCard/>
                        <ArtistCard/>
                        <div className="col-lg-12 col-btn-otr">
                            <div className="col-btn-inr">
                                <a href="" className="btn-outline1 btn-more">Load More Artists</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists
