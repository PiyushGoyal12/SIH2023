import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import ToggleButtons from "./components/ToggleButtons";
import ModeSwitch from "./components/ModeSwitch";

function App() {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const toggleMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isSidebarClosed ? "sidebar-closed" : ""}`}>
            <Sidebar isSidebarClosed={isSidebarClosed} />
            <ToggleButtons onToggleClick={toggleSidebar} />
            <Dashboard />
            <ModeSwitch isDarkMode={isDarkMode} onModeToggle={toggleMode} />
        </div>
    );
}

export default App;
