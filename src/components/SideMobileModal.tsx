import React, {FC, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import mainMenu from "../menus/mainMenu";
import FaceBookIcon from "./icons/FaceBookIcon";
import DiscordIcon from "./icons/DiscordIcon";
import InstagramIcon from "./icons/InstagramIcon";
import {useHistory} from "react-router-dom";

interface IProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideMobileModal: FC<IProps> = ({showMenu, setShowMenu}) => {

    const [isBrowser, setIsBrowser] = useState(false);
    const history = useHistory()
    const handleMenuClick = (routeTo: string) => {
        setShowMenu(false)
        history.push(routeTo)
    }

    useEffect(() => {
        setIsBrowser(true)
    }, []);

    const modalContent = <div className={`modal-content-custom ${showMenu ? 'active' : ''}`}>
        <div className="overlay-content">
            <svg className="icon-close" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setShowMenu(false)}>
                <path d="M17 1L1 17M17 17L1 1" stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
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
                                    <a className={`nav-a heading-h4 ${menu.name}`}>{menu.label}</a>
                                    <ul className={`dropdown-otr ${menu.dropDown? menu.dropDown: ''}`}>
                                        {menu.menus?.map(subMenu => (
                                            <li className="dropdown-li" key={subMenu.name}>
                                                <button onClick={() => handleMenuClick(subMenu.to)} className="dropdown-a body-mb">{subMenu.label}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <button onClick={() => handleMenuClick(menu.to)} className="nav-a heading-h4">{menu.label}</button>
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
            <ul className="icon-ul">
                <FaceBookIcon/>
                <DiscordIcon/>
                <InstagramIcon/>
            </ul>
            <div className="language-selector">
                <ul className="language-ul">
                    <li className="language-li">
                        <a className="language-a">
                            <img className="flag-img" src="./img/flag-img1.png" alt="flag-img"/>
                            <p className="body-sb language">English</p>
                            <svg className="caret-down" width="12" height="8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.5l-5 5-5-5" stroke="#666" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <ul className="drop-ul">
                            <li className="drop-li">
                                <a href="" className="drop-a">
                                    <img className="flag-img" src="./img/flag-img1.png" alt="flag-img"/>
                                    <p className="body-sb language">English</p>
                                </a>
                            </li>
                            <li className="drop-li">
                                <a href="" className="drop-a">
                                    <img className="flag-img" src="./img/flag-img2.png" alt="flag-img"/>
                                    <p className="body-sb language">Pakistan</p>
                                </a>
                            </li>
                            <li className="drop-li">
                                <a href="" className="drop-a">
                                    <img className="flag-img" src="./img/flag-img3.png" alt="flag-img"/>
                                    <p className="body-sb language">UAE</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="copy-name body-s">
                Copyright © 2021 by <a href="/" className="name body-sb">Princeps Polycap Productions.</a> All rights reserved.
            </div>
            <div className="privacy-link">
                <a href="#" className="link body-sb">Privacy Policy</a>
                <span className="dot">•</span>
                <a href="#" className="link body-sb">Terms of Service</a>
            </div>
        </div>
    </div>
    const modal = document.getElementById("myNav")
    if(showMenu && modal) {
        modal.classList.add('active-overlay-content-otr')
    } else if(!showMenu && modal) {
        modal.classList.remove('active-overlay-content-otr')
    }

    if(modal && isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            modal
        )
    } else {
        return null
    }
}

export default SideMobileModal
