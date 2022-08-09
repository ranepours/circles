import React from "react";
import "./circles.css";

const Circle = ({color, idx, x, y, changePosition}) => {
    return (
        <div 
            onClick={() => changePosition(idx)}
            className="Circle"
            style={{backgroundColor: color,
                    position: "absolute",
                    top: `${y}vh`,
                    left: `${x}vh`
            }}
        >
            {idx + 1}
        </div>
    )
}

export default Circle;