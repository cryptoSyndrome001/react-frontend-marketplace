import React, {FC, useEffect} from "react";
import mainMenu from "menus/mainMenu";
import {useHistory} from "react-router-dom";
import {toggleProfileRender} from "../utils";
import CopyIcon from "./icons/CopyIcon";
import {Link} from "react-router-dom";

interface IProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    layout2?: boolean;
}
const Navbar: FC<IProps> = ({showMenu, setShowMenu, layout2}) => {

    useEffect(() => {
        toggleProfileRender()
    }, []);

    const history = useHistory()
    const handleMenuClick = (routeTo: string) => {
        history.push(routeTo)
    }

    if(layout2) {
        return (
            <div className="navbar-main-2-dark">
                <div className="container-fluid">
                    <div className="navbar-inr-2">
                        <div className="burger-menu">
                            <div className="burger-icon-otr" onClick={() => setShowMenu(!showMenu)}>
                                <svg className="burger-icon" width="24" height="24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12h16.5M4 6h9M11 18h9" stroke="#999" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <a href="#" className="logo-otr">
                                <img className="logo-img" src="./img/brand-logo.svg" alt="brand-logo"/>
                            </a>
                        </div>
                        <div className="input-main">
                            <input className="input" type="text" placeholder="Search BLAH"/>
                                <svg className="search-icon" width="18" height="18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15A7 7 0 108 1a7 7 0 000 14zM12.95 12.95L17 17" stroke="#999"
                                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                        </div>
                        <div className="navigation-otr">
                            <ul className="navigation-inr">
                                {mainMenu.map((menu, i) => (
                                    <li className={`nav-li ${i > 3? 'display' : ''}`} key={menu.name}>
                                        {menu.hasSubMenu? (
                                            <>
                                                <a className="nav-a body-sb">{menu.label}</a>
                                                <ul className="dropdown-otr">
                                                    {menu.menus?.map(subMenu => (
                                                        <li className="dropdown-li" key={subMenu.name}>
                                                            <button onClick={() => handleMenuClick(subMenu.to)} className="dropdown-a body-sb">{subMenu.label}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <button onClick={() => handleMenuClick(menu.to)} className="nav-a body-sb">{menu.label}</button>
                                        )}

                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="action-otr">
                            <a href="#" className="btn-fill btn-create">Create</a>
                            <div className="bell-icon-otr">
                                <a className="icon-inr click-open2">
                                    <span className="circle"></span>
                                    <svg className="bell-icon" width="24" height="24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.269 9.75A6.74 6.74 0 0112.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0119.408 18H4.592a.749.749 0 01-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75z"
                                            stroke="#999" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M9 18v.75a3 3 0 006 0V18" stroke="#999" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <div className="icon-hover click-event2">
                                    <div className="heading-otr">
                                        <h5 className="head heading-h5">Notifications</h5>
                                        <a href="" className="link-see body-sb">See All</a>
                                    </div>
                                    <div className="box-otr">
                                        <a href="" className="img-otr">
                                            <img className="art-img" src="./img/cover-img4.jpg" alt="img"/>
                                        </a>
                                        <a href="" className="content-otr">
                                            <p className="desc body-mb">The Beyblade in Black</p>
                                            <p className="desc-2 body-s">New bid: <span className="desc-inr body-sb">4.21 ETH</span>
                                            </p>
                                            <p className="desc-3 body-s">1 hours ago</p>
                                        </a>
                                    </div>
                                    <div className="box-otr">
                                        <a href="" className="img-otr">
                                            <img className="art-img" src="./img/cover-img9.jpg" alt="img"/>
                                        </a>
                                        <a href="" className="content-otr">
                                            <p className="desc body-mb">Abstract Art on Wall</p>
                                            <p className="desc-2 body-s">New bid: <span className="desc-inr body-sb">0.216 ETH</span>
                                            </p>
                                            <p className="desc-3 body-s">10 hours ago</p>
                                        </a>
                                    </div>
                                    <div className="box-otr">
                                        <a href="" className="img-otr">
                                            <img className="art-img" src="./img/cover-img15.jpg" alt="img"/>
                                        </a>
                                        <a href="" className="content-otr">
                                            <p className="desc body-mb">3D Ethereum in Diamond</p>
                                            <p className="desc-2 body-s">New bid: <span className="desc-inr body-sb">2.156 ETH</span>
                                            </p>
                                            <p className="desc-3 body-s">2 hours ago</p>
                                        </a>
                                    </div>
                                    <div className="box-otr">
                                        <a href="" className="img-otr">
                                            <img className="art-img" src="./img/cover-img6.jpg" alt="img"/>
                                        </a>
                                        <a href="" className="content-otr">
                                            <p className="desc body-mb">Softy Spehere Gradients</p>
                                            <p className="desc-2 body-s">New bid: <span className="desc-inr body-sb">2.56 ETH</span>
                                            </p>
                                            <p className="desc-3 body-s">3 hours ago</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-otr">
                                <a className="profile-inr click-open3">
                                    <img className="creator" src="./img/user-Image17.jpg" alt="creator"/>
                                        <p className="price body-sb">3.067 ETH</p>
                                </a>
                                <div className="icon-hover-2 click-event3">
                                    <h5 className="heading heading-h5">The Lucky Being</h5>
                                    <div className="copy-icon-otr">
                                        <p className="desc body-s">0xd07dc4262bcdb...2430</p>
                                        <CopyIcon/>
                                    </div>
                                    <div className="box-otr">
                                        <div className="img-otr">
                                            <img className="img-eht" src="./img/ethereum.png" alt="img"/>
                                        </div>
                                        <div className="price-otr">
                                            <p className="desc body-s">Current Balance</p>
                                            <h5 className="heading heading-h5">3.067 ETH</h5>
                                        </div>
                                    </div>
                                    <ul className="link-profile-otr">
                                        <li className="link-profile-inr">
                                            <span className="circle-hover"></span>
                                            <Link to='/profile' className="profile body-sb">My Profile</Link>
                                        </li>
                                        <li className="link-profile-inr">
                                            <span className="circle-hover"></span>
                                            <a href="" className="profile body-sb">Disconnect</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="navbar-main-dark">
            <div className="container-fluid">
                <div className="navbar-inr">
                    <div className="logo-otr">
                        <a href="/" className="logo-inr">
                            <img className="logo" src="./img/brand-logo.svg" alt="brand-logo"/>
                        </a>
                    </div>
                    <div className="input-main">
                        <input className="input" type="text" placeholder="Search BLAH"/>
                            <svg className="search-icon" width="18" height="18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15A7 7 0 108 1a7 7 0 000 14zM12.95 12.95L17 17" stroke="#999"
                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                    </div>
                    <div className="navigation-otr">
                        <ul className="navigation-inr">
                            {mainMenu.map(menu => (
                                <li className="nav-li" key={menu.name}>
                                    {menu.hasSubMenu? (
                                        <>
                                            <a className="nav-a body-sb">{menu.label}</a>
                                            <ul className="dropdown-otr">
                                            {menu.menus?.map(subMenu => (
                                                <li className="dropdown-li" key={subMenu.name}>
                                                    <button onClick={() => handleMenuClick(subMenu.to)} className="dropdown-a body-sb">{subMenu.label}</button>
                                                </li>
                                            ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <button onClick={() => handleMenuClick(menu.to)} className="nav-a body-sb">{menu.label}</button>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="action-otr">
                        <a href="#" className="btn-fill btn-create">Virtual Gallery</a>
                        <a href="#" className="btn-outline1 btn-wallet">Connect
                            Wallet</a>
                    </div>
                    <div className="burger-menu" onClick={() => setShowMenu(!showMenu)}>
                        <div className="burger-icon-otr">
                            <svg className="burger-icon" width="24" height="24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12h16.5M4 6h9M11 18h9" stroke="#999" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
