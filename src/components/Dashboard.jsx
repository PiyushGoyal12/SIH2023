import React from "react";
import "./Dashboard.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import notification from "./images/notification.png";
import message from "./images/message.png";
import exit from "./images/exit.png";

const Dashboard = ({ isDarkMode, onModeToggle }) => {
    return (
        <div>
            <div className="home">
                <div className="headerwrapper">
                    <div className="headertitle">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="user">
                        <div className="chat">
                            <a href="#">
                                <img
                                    className="icons"
                                    src={message}
                                    alt="newsimage"
                                />
                            </a>
                        </div>
                        <div className="notification">
                            <a href="#">
                                <img
                                    className="icons"
                                    src={notification}
                                    alt="newsimage"
                                />
                            </a>
                        </div>
                        <div className="logout">
                            <a href="#">
                                <img
                                    className="icons"
                                    src={exit}
                                    alt="newsimage"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {/* header */}
                <div className="cards">
                    <div className="allcards">
                        <div className="card">
                            <h3>1210+</h3>
                            <div className="info">News Articles</div>
                        </div>
                        <div className="card">
                            <h3>200+</h3>
                            <div className="info">Websites</div>
                        </div>
                        <div className="card">
                            <h3>120+</h3>
                            <div className="info">Videos</div>
                        </div>
                    </div>
                </div>
                {/* cards */}
                <div className="graph"></div>
            </div>
            <div className="mode-toggle">
                <div className={`moon ${isDarkMode ? "dark" : ""}`}>
                    <DarkModeIcon />
                    <LightModeIcon />
                </div>
                <span className="text mode-text suns">
                    {isDarkMode ? "Light mode" : "Dark Mode"}
                </span>
                <div className="toggleswitch" onClick={onModeToggle}>
                    <span className="switch"></span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
