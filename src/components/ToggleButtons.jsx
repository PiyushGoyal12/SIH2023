import React from "react";

function ToggleButtons({ onToggleClick }) {
    return (
        <div>
            <button className="toggle" onClick={onToggleClick}>
                Toggle Sidebar
            </button>
            {/* Add any other toggle buttons here */}
        </div>
    );
}

export default ToggleButtons;
