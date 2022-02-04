import React, {FC, useEffect} from "react";
import FaceBookIcon from "../icons/FaceBookIcon";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import CopyIcon from "../icons/CopyIcon";
import {loadShare} from "utils";
import ShareIcon from "../icons/ShareIcon";

const UserProfileCard: FC = () => {
    useEffect(() => {
        loadShare()
    }, []);

    return (
        <div className="user-profile-otr-dark">
            <div className="container-fluid">
                <div className="wrapper">
                    <div className="user-img">
                        <div className="creator-img-otr">
                            <img className="creator-img" src="./img/single-creator-profile.jpg"
                                 alt="creator-img"/>
                        </div>
                    </div>
                    <div className="another-user">
                        <div className="another-user-top">
                            <div className="another-user-left">
                                <div className="user-main">
                                    <h3 className="user-head heading-h4">Another User</h3>
                                    <div className="check-otr">
                                        <svg className="check-icon" width="14" height="14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.813 3.938l-6.126 6.124L2.626 7" stroke="#fff" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <a href="" className="address-main">
                                    <p className="address body-s">0xd07dc4262...2430</p>
                                    <div className="copy-icon-otr">
                                        <CopyIcon/>
                                    </div>
                                </a>
                            </div>
                            <div className="another-user-right">
                                <div className="icons-main">
                                    <div className="icon-otr icon-share icon-div">
                                        <ShareIcon/>
                                        <div className="share-hover">
                                            <h5 className="heading heading-h5">Share the Link</h5>
                                            <ul className="icon-ul">
                                                <FaceBookIcon/>
                                                <DiscordIcon/>
                                                <InstagramIcon/>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="icon-flag">
                                        <svg className="flag" width="24" height="24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 20.25V4.5M3.75 15.75c6-4.5 10.5 4.5 16.5 0V4.5c-6 4.5-10.5-4.5-16.5 0"
                                                stroke="#999" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="follower-main">
                                    <div className="follow-inr" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <h5 className="num heading-h5">3,578</h5>
                                        <p className="body-s follow">Followers</p>
                                    </div>
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                         data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                            <div className="modal-content">
                                                <h4 className="heading heading-h4">Followers</h4>
                                                <div className="create-inr box1">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img17.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box2">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img16.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box3">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img3.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box4">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img6.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box5">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img9.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box6">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img14.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box7">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img15.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box8">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img17.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box9">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img3.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box10">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img5.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="close-icon-otr">
                                                    <svg className="icon-close" data-bs-dismiss="modal"
                                                         aria-label="Close" width="18" height="18" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L1 17M17 17L1 1" stroke="#CFCFCF" stroke-width="2"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static"
                                         data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                            <div className="modal-content">
                                                <h4 className="heading heading-h4">Following</h4>
                                                <div className="create-inr box1">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img3.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box2">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img8.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box3">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img5.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box4">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img2.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box5">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img16.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box6">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img15.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box7">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img17.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box8">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img9.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box9">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/create-img-2.png"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="create-inr box10">
                                                    <div className="profile-otr">
                                                        <div className="create-img">
                                                            <a href="">
                                                                <img className="img-create"
                                                                     src="./img/cover-img9.jpg"
                                                                     alt="create-img"/>
                                                            </a>
                                                            <div className="check-otr">
                                                                <svg className="check-icon" width="10" height="10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.438 2.813L4.061 7.188 1.876 5"
                                                                          stroke="#fff" stroke-width="2"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="create-content">
                                                            <p className="body-sb create-pb">Wow Creates</p>
                                                            <p className="body-s create-p">0.556 ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="follow-otr">
                                                        <a href="" className="btn-fill btn-follow">Follow</a>
                                                    </div>
                                                </div>
                                                <div className="close-icon-otr">
                                                    <svg className="icon-close" data-bs-dismiss="modal"
                                                         aria-label="Close" width="18" height="18" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L1 17M17 17L1 1" stroke="#CFCFCF" stroke-width="2"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="follow-inr" data-bs-toggle="modal"
                                         data-bs-target="#staticBackdrop1">
                                        <h5 className="num heading-h5">204</h5>
                                        <p className="body-s follow">Following</p>
                                    </div>
                                </div>
                                <div className="action-otr">
                                    <a href="" className="btn-fill btn-follow">Follow</a>
                                </div>
                            </div>
                        </div>
                        <div className="another-user-about">
                            <div className="another-about-left">
                                <h5 className="about-head heading-h5">About Me</h5>
                                <p className="body-m about-desc">
                                    Egestas purus sit nullam quis. Ornare magna rutrum tellus <br/>
                                    porta massa lectus viverra amet velit.
                                </p>
                            </div>
                            <div className="another-about-right">
                                <div className="visto-otr">
                                    <div className="link-icon">
                                        <svg className="link" width="18" height="18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.493 3.93l1.774-1.774a3.943 3.943 0 115.577 5.577l-2.535 2.535a3.944 3.944 0 01-5.577 0"
                                                stroke="#999" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path
                                                d="M9.507 14.07l-1.774 1.774a3.944 3.944 0 11-5.577-5.576l2.535-2.535a3.943 3.943 0 015.577 0"
                                                stroke="#999" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <a href="https://themeforest.net/user/vistothemes" target="_blank"
                                       className="visto body-mb">visothemes.com</a>
                                </div>
                                <ul className="icon-ul">
                                    <FaceBookIcon/>
                                    <DiscordIcon/>
                                    <InstagramIcon/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard
