import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
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
                                <i className="material-symbols-outlined icons">
                                    chat
                                </i>
                            </a>
                        </div>
                        <div className="notification">
                            <a href="#">
                                <i className="material-symbols-outlined icons">
                                    notifications_active
                                </i>
                            </a>
                        </div>
                        <div className="logout">
                            <a
                                href="
                #"
                            >
                                <i className="material-symbols-outlined icons">
                                    logout
                                </i>
                            </a>
                        </div>
                    </div>
                </div>{" "}
                {/*  header */}
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
                </div>{" "}
                {/* cards */}
                <div className="graph"></div>
            </div>
        </div>
    );
};

export default Dashboard;
