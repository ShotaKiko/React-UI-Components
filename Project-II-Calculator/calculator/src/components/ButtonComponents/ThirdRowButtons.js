import React from 'react';
import './Button.css';

function ThirdRowButtons(props) {
    return(
        <div className="thirdRow">
            <div className="tile 4"> 
                4
            </div>

            <div className="tile 5">
              5
            </div>

            <div className="tile 6">
              6
            </div>

            <div className="tileOperator">
              -
            </div>
        </div>
    );
}

export default ThirdRowButtons;