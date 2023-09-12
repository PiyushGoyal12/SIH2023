import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="text">Direct</span>
                    </div>
                    <i className="material-symbols-outlined toggle">
                        chevron_right
                    </i>
                </header>
                <div className="menubar">
                    <div className="menu">
                        <ul className="menulinks">
                            <li className="navlink">
                                <span
                                    className="text nav-text1"
                                    id="headingggg"
                                >
                                    Main
                                </span>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        full_coverage
                                    </i>
                                    <span className="text nav-text">
                                        News History
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        monitoring
                                    </i>
                                    <span className="text nav-text">
                                        Analysis
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        bug_report
                                    </i>
                                    <span className="text nav-text">
                                        Performances
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        web_asset
                                    </i>
                                    <span className="text nav-text">
                                        Websites
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        translate
                                    </i>
                                    <span className="text nav-text">
                                        Languages
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <span
                                    className="text nav-text1"
                                    id="headingggg"
                                >
                                    Data
                                </span>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        filter_alt
                                    </i>
                                    <span className="text nav-text">
                                        Filters
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <i className="material-symbols-outlined icons">
                                        delete
                                    </i>
                                    <span className="text nav-text">
                                        Delete
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottomcontent">
                        <li className="">
                            <a href="#">
                                <i className="material-symbols-outlined icons">
                                    settings
                                </i>
                                <span className="text nav-text">settings</span>
                            </a>
                        </li>
                        <li className="mode">
                            <div className="moon">
                                <i className="material-symbols-outlined icons">
                                    dark_mode
                                </i>
                                <i className="material-symbols-outlined icons moons">
                                    light_mode
                                </i>
                            </div>
                            <span className="text mode-text suns">
                                Dark Mode
                            </span>
                            <div className="toggleswitch">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
