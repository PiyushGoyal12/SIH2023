import React from "react";
import "./Dashboard.css";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

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
                                <ChatIcon />
                            </a>
                        </div>
                        <div className="notification">
                            <a href="#">
                                <NotificationsActiveIcon />
                            </a>
                        </div>
                        <div className="logout">
                            <a href="#">
                                <LogoutIcon />
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
