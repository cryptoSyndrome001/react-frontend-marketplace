import React, {FC} from "react";

const PostCard: FC = () => {
    return (
        <div className="col-lg-6 col-otr">
            <div className="col-inr box1">
                <div className="img-main">
                    <a href="#" className="img-otr">
                        <img className="img" src="./img/blog-img1.jpg" alt="artwork-img"/>
                    </a>
                    <div className="content">
                        <div className="title-main body-sb">
                            <p className="title">The Top 10s</p>
                            <span className="dot">•</span>
                            <p className="date">Jun 14, 2021</p>
                        </div>
                        <a href="#" className="box-head heading-h4">Top 10 NFT Projects
                            That Shocked The Internet</a>
                    </div>
                </div>
                <p className="desc body-m">
                    Mollis pellentesque pellentesque feugiat risus ut amet nunc.
                    Volutpat nam convallis urna sollicitudin nunc.
                </p>
            </div>
        </div>
    )
}

export default PostCard
