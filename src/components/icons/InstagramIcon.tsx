import React, {FC} from "react";

const InstagramIcon: FC = () => {
    return (
        <li className="icon-li">
            <a href="https://www.instagram.com/blah2world/" className="icon-a">
                <svg className="icon" width="32" height="32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 16.859l11.24 9.89a1 1 0 001.635-.527l4.702-20.516a1 1 0 00-1.34-1.154l-23.07 9.063a1 1 0 00.17 1.911L11 16.86zM11 16.86L28.014 4.57"
                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <path d="M16.613 21.799l-3.906 3.906A1 1 0 0111 24.998v-8.14"
                          stroke="#999" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </a>
        </li>
    )
}

export default InstagramIcon
