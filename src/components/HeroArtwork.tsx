import React, {FC} from "react";
import {Link} from "react-router-dom";

const HeroArtwork: FC = () => {
    return (
        <div className="hero-single-artwork-dark">
            <div className="container-fluid">
                <div className="hero-inr">
                    <Link to="/artworks/something" className="img-otr img-tilt" data-tilt={true}>
                        <img className="img-artwork img-fluid" src="./img/single-artwork-image.jpg"
                             alt="artwork-img"/>
                    </Link>
                    <div className="icons-div">
                        <div className="icons-div-inr">
                            <div className="heart-main icon-div">
                                <a className="heart-otr">
                                    <svg className="heart-icon" width="18" height="17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 15.08S1 10.6 1 5.16a4.16 4.16 0 018-1.603h0a4.16 4.16 0 018 1.603c0 5.44-8 9.92-8 9.92z"
                                            stroke="#999" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <p className="body-sb num">227 Likes</p>
                            </div>
                            <div className="icon-otr icon-share icon-div">
                                <svg className="icon" width="24" height="24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 15a3 3 0 100-6 3 3 0 000 6zM16.5 21.75a3 3 0 100-6 3 3 0 000 6zM16.5 8.25a3 3 0 100-6 3 3 0 000 6zM13.976 6.872l-5.453 3.506M8.523 13.622l5.454 3.506"
                                        stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div className="share-hover">
                                    <h5 className="heading heading-h5">Share the Link</h5>
                                    <ul className="icon-ul">
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
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
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
                                                <svg className="icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6 25s5-1 6-4c0 0-8-3-6-14 0 0 4 5 10 6v-2a5 5 0 019.584-2H30l-4 4c0 7-5 14-14 14-4 0-6-2-6-2z"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
                                                <svg className="icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#999"/>
                                                    <path
                                                        d="M9.3 10A21.917 21.917 0 0116 9a21.916 21.916 0 016.7 1M22.7 22a21.917 21.917 0 01-6.7 1 21.917 21.917 0 01-6.7-1"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path
                                                        d="M19.38 22.761l1.504 3.006a.996.996 0 001.123.526c3.068-.75 5.712-2.057 7.638-3.73a1.007 1.007 0 00.31-1.05L25.706 7.358a1.002 1.002 0 00-.578-.639c-1.2-.491-2.44-.875-3.708-1.148a1.002 1.002 0 00-1.165.66l-.997 2.99M12.62 22.76l-1.504 3.007a.997.997 0 01-1.124.526c-3.067-.75-5.711-2.057-7.637-3.73a1.007 1.007 0 01-.309-1.05L6.293 7.358a1.003 1.003 0 01.578-.64c1.2-.49 2.44-.874 3.708-1.147a1.002 1.002 0 011.165.66l.997 2.99"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path
                                                        d="M12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        fill="#999"/>
                                                    <path
                                                        d="M9.3 10A21.917 21.917 0 0116 9a21.916 21.916 0 016.7 1M22.7 22a21.917 21.917 0 01-6.7 1 21.917 21.917 0 01-6.7-1"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path
                                                        d="M19.38 22.761l1.504 3.006a.996.996 0 001.123.526c3.068-.75 5.712-2.057 7.638-3.73a1.007 1.007 0 00.31-1.05L25.706 7.358a1.002 1.002 0 00-.578-.639c-1.2-.491-2.44-.875-3.708-1.148a1.002 1.002 0 00-1.165.66l-.997 2.99M12.62 22.76l-1.504 3.007a.997.997 0 01-1.124.526c-3.067-.75-5.711-2.057-7.637-3.73a1.007 1.007 0 01-.309-1.05L6.293 7.358a1.003 1.003 0 01.578-.64c1.2-.49 2.44-.874 3.708-1.147a1.002 1.002 0 011.165.66l.997 2.99"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
                                                <svg className="icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15 11l-4 17M7.693 19.57A10 10 0 1126 14c0 5.523-4 9-8 9s-5.204-2.633-5.204-2.633"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
                                                <svg className="icon" width="32" height="32" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 16l-6-4v8l6-4z" stroke="#999" strokeWidth="2"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path
                                                        d="M3 16c0 3.72.384 5.902.676 7.023a1.99 1.99 0 001.204 1.362C9.065 25.993 16 25.95 16 25.95s6.935.044 11.12-1.564a1.99 1.99 0 001.204-1.362C28.616 21.902 29 19.72 29 16c0-3.72-.384-5.902-.676-7.023a1.99 1.99 0 00-1.205-1.362C22.935 6.007 16 6.05 16 6.05S9.065 6.007 4.88 7.615a1.99 1.99 0 00-1.204 1.362C3.384 10.098 3 12.28 3 16z"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="icon-li">
                                            <a href="" className="icon-a">
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
                                    </ul>
                                </div>
                            </div>
                            <div className="icon-otr icon-div">
                                <svg className="icon" width="24" height="24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.75 20.25V4.5M3.75 15.75c6-4.5 10.5 4.5 16.5 0V4.5c-6 4.5-10.5-4.5-16.5 0"
                                        stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroArtwork
