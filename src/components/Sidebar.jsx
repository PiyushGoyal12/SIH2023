import React, { useState } from "react";
import "./Sidebar.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FullCoverageIcon from "@mui/icons-material/RoundedCorner";
import MonitoringIcon from "@mui/icons-material/Analytics";
import BugReportIcon from "@mui/icons-material/BugReport";
import WebAssetIcon from "@mui/icons-material/Web";
import TranslateIcon from "@mui/icons-material/Translate";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
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
                        <span className="text">Direct</span>
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
                                    <FullCoverageIcon />
                                    <span className="text nav-text">
                                        News History
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <MonitoringIcon />
                                    <span className="text nav-text">
                                        Analysis
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <BugReportIcon />
                                    <span className="text nav-text">
                                        Performances
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <WebAssetIcon />
                                    <span className="text nav-text">
                                        Websites
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <TranslateIcon />
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
                                    <FilterAltIcon />
                                    <span className="text nav-text">
                                        Filters
                                    </span>
                                </a>
                            </li>
                            <li className="navlink">
                                <a href="#">
                                    <DeleteIcon />

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
                            <SettingsIcon />
                            <span className="text nav-text">settings</span>
                        </a>
                    </li>
                    <li className="mode" onClick={toggleMode}>
                        <div className="moon">
                            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                        </div>
                        <span className="text mode-text suns">
                            {isDarkMode ? "Light mode" : "Dark Mode"}
                        </span>
                        <div className="toggleswitch">
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
