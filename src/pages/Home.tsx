import React, {FC} from "react";
import Bid from "components/Bid";
import ArtworkCard from "components/Cards/ArtworkCard";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ArtistCard from "components/Cards/ArtistCard";
import CollectionCard from "components/Cards/CollectionCard";
import CallToAction from "components/CallToAction";
import PostCard from "components/Cards/PostCard";

const Home: FC = () => {

    const responsive = {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
    const collectionResponsive = {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
    return (
        <>
            <Bid/>
            <div className="live-acution-dark">
                <div className="container-fluid">
                    <div className="live-auction-inr">
                        <div className="heading-otr">
                            <div className="head-otr">
                                <span className="dot"></span>
                                <h3 className="heading heading-h3">Live Auctions</h3>
                            </div>
                        </div>
                        <span className="line"></span>
                        <OwlCarousel className="row row-custom owl-theme" id="live-auctions" margin={24} responsive={responsive}>
                            <ArtworkCard/>
                            <ArtworkCard/>
                            <ArtworkCard/>
                            <ArtworkCard/>
                            <ArtworkCard/>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="featured-creator-dark">
                <div className="container-fluid">
                    <div className="featured-creator-inr">
                        <div className="heading-otr">
                            <div className="head-otr">
                                <h3 className="heading heading-h3">Artists of the Week</h3>
                            </div>
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">View All Artists</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom">
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                            <ArtistCard/>
                        </div>
                        <div className="responsive">
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">View All Artists</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-artwork-dark">
                <div className="container-fluid">
                    <div className="featured-artwork-inr">
                        <div className="heading-otr">
                            <div className="head-otr">
                                <h3 className="heading heading-h3">Featured Artworks</h3>
                            </div>
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">View All Artworks</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom">
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                            <ArtworkCard classes={['col-lg-3']}/>
                        </div>
                        <div className="responsive">
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">View All Artworks</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-collection-dark">
                <div className="container-fluid">
                    <div className="popular-collection-inr">
                        <div className="heading-otr">
                            <div className="head-otr">
                                <h3 className="heading heading-h3">Popular Collections</h3>
                            </div>
                        </div>
                        <span className="line"></span>
                        <OwlCarousel className="row-custom owl-carousel owl-theme" id="popular-artwork" margin={24} responsive={collectionResponsive}>
                            <CollectionCard/>
                            <CollectionCard/>
                            <CollectionCard/>
                            <CollectionCard/>
                            <CollectionCard/>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <CallToAction/>
            <div className="letest-blog-main-dark">
                <div className="container-fluid">
                    <div className="latest-blog-inr">
                        <div className="heading-otr">
                            <h3 className="heading heading-h3">Latest Posts of NFTs</h3>
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">Read All Blogs</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <span className="line"></span>
                        <div className="row row-custom">
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                            <PostCard/>
                        </div>
                        <div className="responsive">
                            <a href="#" className="view-all">
                                <p className="View-p body-sb">Read All Blogs</p>
                                <svg className="arrow-icon" width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8h16M10.455 1.455L17 8l-6.545 6.545" stroke="#366CE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
