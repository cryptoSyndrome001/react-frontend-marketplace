import React, {FC} from "react";

const CollectionCard: FC = () => {
    return (
        <div className="col-otr">
            <div className="col-inr">
                <a href="#" className="img-otr">
                    <img className="img-fluid img-artwork" src="./img/cover-img8.jpg" alt="artwork-img"/>
                </a>
                <div className="content">
                    <a href="#" className="create-img">
                        <img className="img-create" src="./img/user-Image11.jpg" alt="create-img"/>
                            <div className="check-otr">
                                <svg className="check-icon" width="10" height="10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.438 2.813L4.061 7.188 1.876 5" stroke="#fff" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                    </a>
                    <a href="#" className="art-title body-sb">Brainy Nerds Today</a>
                    <a href="#" className="by-otr body-sb"> <span
                        className="by body-s">by</span> MetaBoss</a>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
