import React, {FC} from "react";
import FaceBookIcon from "./icons/FaceBookIcon";
import DiscordIcon from "./icons/DiscordIcon";
import InstagramIcon from "./icons/InstagramIcon";
import mainMenu from "../menus/mainMenu";
import {Link} from "react-router-dom";

const Footer: FC = () => {
    const navigation = mainMenu.filter(menu => !menu.hasSubMenu)
    const explore = mainMenu.filter(menu => menu.name === "explore")[0]
    const community = mainMenu.filter(menu => menu.name === "community")[0]
    return (
            <div className="footer-main-dark">
                <div className="container-fluid">
                    <div className="row row-custom">
                        <div className="col-lg-3 col-md-12 col-log-otr">
                            <div className="col-logo-inr">
                                <a href="/" className="logo-otr">
                                    <img className="logo-img" src="./img/brand-logo.svg" alt="brand-logo"/>
                                </a>
                                <ul className="icon-ul">
                                    <FaceBookIcon/>
                                    <DiscordIcon/>
                                    <InstagramIcon/>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-nav-otr">
                            <div className="col-nav-inr">
                                <h5 className="heading-h5 nav-head">Navigation</h5>
                                <ul className="nav-ul">
                                    {navigation.map(menu => (
                                        <li className="nav-li" key={menu.name}>
                                            <Link to={menu.to} className="nav-a body-sb">{menu.label}</Link>
                                        </li>
                                    ))}
                                    <li className="nav-li">
                                        <a href="#" className="nav-a body-sb">Virtual Gallery</a>
                                    </li>
                                    <li className="nav-li">
                                        <a href="#" className="nav-a body-sb">Connect
                                            Wallet</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-explore-otr">
                            <div className="col-explore-inr">
                                <h5 className="heading-h5 explore-head">Explore</h5>
                                <ul className="explore-ul">
                                    {explore.menus?.map(menu => (
                                        <li className="explore-li">
                                            <Link to={menu.to} className="explore-a body-sb">{menu.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-community-otr">
                            <div className="col-community-inr">
                                <h5 className="heading-h5 community-head">Community</h5>
                                <ul className="community-ul">
                                    {community.menus?.map(menu => (
                                        <li className="community-li">
                                            <Link to={menu.to} className="community-a body-sb">{menu.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-subscribe-otr">
                            <form className="col-subscribe-inr" action="https://world.us6.list-manage.com/subscribe/post?u=14d7d084505aa68a61c764130&amp;id=8b8a88047d" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" method="post" target="_blank">
                                <h5 className="heading-h5 sub-head">Get Latest Updates</h5>
                                <div style={{position: "absolute", left: "-5000px;"}} aria-hidden="true"><input
                                    type="hidden" name="b_14d7d084505aa68a61c764130_8b8a88047d" tabIndex={-1}
                                    value=""/></div>
                                <input className="input" type="text" placeholder="Your Email Address" name="EMAIL" tabIndex={-1} required={true}/>
                                    <button className="btn-fill btn-subscribe" type="submit" id="mc-embedded-subscribe">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer
