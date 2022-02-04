import React, {FC} from "react";
import {Link} from "react-router-dom";

const NotFound: FC = () => {
    return (
        <div className="error-main-dark">
            <img className="responsive-404" src="./img/404-responsive-dark.png" alt="img"/>
            <img className="img-main img-fluid" src="./img/404-dark.svg" alt="img"/>
                <h2 className="heading heading-h2">Ooops! Page doesn’t exist.</h2>
                <div className="action-otr">
                    <Link to="/" className="btn-fill btn-create">Back to Home</Link>
                </div>
        </div>
    )
}

export default NotFound
