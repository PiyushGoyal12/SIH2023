import React, { useState } from "react";
import "./Sidebar.css";
import news from "./images/news.png";
import analysis from "./images/analysis.png";
import performance from "./images/performance.png";
import webdesign from "./images/web-design.png";
import language from "./images/language.png";
import filter from "./images/filter.png";
import delet from "./images/delete.png";
import setting from "./images/setting.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Sidebar = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const toggleMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <div>
            <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
                <header>
                    <div className="image-text">
                        <span className="Dtext">Direct</span>
                        <ChevronRightIcon onClick={toggleSidebar} />
                    </div>
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
                                    <img
                                        className="icons"
                                        src={news}
                                        alt="newsimage"
                                    />
                                    <span className="text nav-text">
                                        News History
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <img
                                        className="icons"
                                        src={analysis}
                                        alt="newsimage"
                                    />
                                    <span className="text nav-text">
                                        Analysis
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <img
                                        className="icons"
                                        src={performance}
                                        alt="newsimage"
                                    />
                                    <span className="text nav-text">
                                        Performances
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <img
                                        className="icons"
                                        src={webdesign}
                                        alt="newsimage"
                                    />
                                    <span className="text nav-text">
                                        Websites
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <img
                                        className="icons"
                                        src={language}
                                        alt="newsimage"
                                    />
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
                                    <img
                                        className="icons"
                                        src={filter}
                                        alt="newsimage"
                                    />
                                    <span className="text nav-text">
                                        Filters
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <img
                                        className="icons"
                                        src={delet}
                                        alt="newsimage"
                                    />

                                    <span className="text nav-text">
                                        Delete
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottomcontent">
                    <li className="">
                        <a href="#">
                            <img
                                className="icons"
                                src={setting}
                                alt="newsimage"
                            />
                            <span className="text nav-text">Settings</span>
                        </a>
                    </li>
                    {/* <li className="mode" onClick={toggleMode}>
                        <div className="moon">
                            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                        </div>
                        <span className="text mode-text suns">
                            {isDarkMode ? "Light mode" : "Dark Mode"}
                        </span>
                        <div className="toggleswitch">
                            <span className="switch"></span>
                        </div>
                    </li> */}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
