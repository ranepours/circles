import React from "react";

const ColorButtons = ({options, addCircle}) => {
    return (
        <div>
            {options.map(color => 
                <button onClick={() => addCircle(color)}                                       
                    className="ColorButton-btn"
                    style={{backgroundColor: color}}>
                        {color}
                </button>)}
        </div>
    )
}

export default ColorButtons;