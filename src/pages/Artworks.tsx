import React, {FC, useEffect} from "react";
import ArtworkCard from "components/Cards/ArtworkCard";
import {renderSelect, renderTabs} from "utils";


const Artworks: FC = () => {
    useEffect(() => {
        renderSelect()
        renderTabs()
    }, []);

    return (
        <div className="explore-artwork-dark">
            <div className="container-fluid">
                <div className="explore-artwork-inr">
                    <div className="heading-otr">
                        <div className="head-otr">
                            <h3 className="heading heading-h3">Explore Artworks</h3>
                        </div>
                    </div>
                    <div className="teb-main">
                        <div className="tab-otr">
                            <div className="tab-inr">
                                <ul className="tabs">
                                    <li className="tab-link tab-1 active" data-tab="1">
                                        <p className="tab-p body-sb">All</p>
                                    </li>
                                    <li className="tab-link tab-2" data-tab="2">
                                        <p className="tab-p body-sb">Photography</p>
                                    </li>
                                    <li className="tab-link tab-3" data-tab="3">
                                        <p className="tab-p body-sb">Videos</p>
                                    </li>
                                    <li className="tab-link tab-4" data-tab="4">
                                        <p className="tab-p body-sb">Illustrations</p>
                                    </li>
                                    <li className="tab-link tab-5" data-tab="5">
                                        <p className="tab-p body-sb">Digital Art</p>
                                    </li>
                                    <li className="tab-link tab-6" data-tab="6">
                                        <p className="tab-p body-sb">Domains</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="slect-main">
                                <select id="year">
                                    <option className="linkk" value="hide">All Artworks</option>
                                    <option className="linkk" value="2010">All Artworks</option>
                                    <option className="linkk" value="2011">Sort by</option>
                                    <option className="linkk" value="2012">All Artworks</option>
                                    <option className="linkk" value="2013">Sort by</option>
                                </select>
                                <select id="week">
                                    <option className="linkk" value="hide">Sort by</option>
                                    <option className="linkk" value="2010">All Artworks</option>
                                    <option className="linkk" value="2011">Sort by</option>
                                    <option className="linkk" value="2012">All Artworks</option>
                                    <option className="linkk" value="2013">Sort by</option>
                                </select>
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
                        <div id="tab-5" className="tab-content">
                            <div className="row row-custom-inr">
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                            </div>
                        </div>
                        <div id="tab-6" className="tab-content">
                            <div className="row row-custom-inr">
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                                <ArtworkCard classes={['col-lg-3']}/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-btn-otr">
                            <div className="col-btn-inr">
                                <a href="#" className="btn-outline1 btn-more">Load More Artworks</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artworks
