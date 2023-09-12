import React from "react";

function ModeSwitch({ isDarkMode, onModeToggle }) {
    return (
        <div className="toggleswitch" onClick={onModeToggle}>
            <span className={`switch ${isDarkMode ? "dark" : ""}`}></span>
        </div>
    );
}

export default ModeSwitch;
