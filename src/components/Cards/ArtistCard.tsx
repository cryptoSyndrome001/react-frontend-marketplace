import React, {FC} from "react";
import {Link} from "react-router-dom";

const ArtistCard: FC = () => {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 creator-otr">
            <Link to="/artists/something" className="create-inr box1">
                <div className="create-img">
                    <img className="img-create" src="./img/user-Image16.jpg" alt="create-img"/>
                        <div className="check-otr">
                            <svg className="check-icon" width="10" height="10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.438 2.813L4.061 7.188 1.876 5" stroke="#fff" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                </div>
                <div className="create-content">
                    <p className="body-sb create-pb">Meta Boss</p>
                    <p className="body-s create-p">0.25 ETH</p>
                </div>
            </Link>
        </div>
    )
}

export default ArtistCard
