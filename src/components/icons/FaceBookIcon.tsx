import React, {FC} from "react";

const FaceBookIcon: FC = () => {
    return (
        <li className="icon-li">
            <a href="https://www.facebook.com/blah.w0rld" className="icon-a">
                <svg className="icon" width="32" height="32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <path d="M21 11h-2a3 3 0 00-3 3v14M12 18h8" stroke="#999"
                          strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </a>
        </li>
    )
}

export default FaceBookIcon
