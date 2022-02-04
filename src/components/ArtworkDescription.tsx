import React, {FC} from "react";

const ArtworkDescription: FC = () => {
    return (
        <div className="col-lg-5 col-left-otr">
            <div className="col-left-inr">
                <div className="user-main-otr">
                    <div className="create-otr">
                        <div className="create-inr">
                            <a href="#" className="create-img">
                                <img className="img-create" src="./img/user-Image18.jpg" alt="create-img"/>
                                    <div className="check-otr">
                                        <svg className="check-icon" width="10" height="10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.438 2.813L4.061 7.188 1.876 5" stroke="#fff" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            </a>
                            <div className="create-content">
                                <p className="body-s create-p">Owned by</p>
                                <a href="#" className="body-sb create-pb">Meta Boss</a>
                            </div>
                        </div>
                    </div>
                    <div className="create-otr">
                        <div className="create-inr">
                            <a href="#" className="create-img">
                                <img className="img-create" src="./img/user-Image17.jpg" alt="create-img"/>
                                    <div className="check-otr">
                                        <svg className="check-icon" width="10" height="10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.438 2.813L4.061 7.188 1.876 5" stroke="#fff" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                            </a>
                            <div className="create-content">
                                <p className="body-s create-p">Owned by</p>
                                <a href="#" className="body-sb create-pb">NFT King</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="heading-h2 head">
                    The Pretty Fantasy World of Mine
                </h2>
                <p className="body-m desc para1">
                    Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                    Facilisi lobortis morbi fringilla urna amet sed ipsum vitae malesuada.
                    Augue neque dui venenatis in sit sem a venenatis.
                </p>
                <p className="body-m desc para2">
                    Egestas purus sit nullam quis. Ornare magna rutrum tellus tellus porta massa.
                    Lectus viverra amet velit consequat sit.
                </p>
            </div>
        </div>
    )
}

export default ArtworkDescription
