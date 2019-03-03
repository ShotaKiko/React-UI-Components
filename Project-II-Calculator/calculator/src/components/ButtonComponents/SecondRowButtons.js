import React from 'react';
import './Button.css';

function SecondRowButtons(props) {
    return(
        <div className="secondRow">
            <div className="tile 7"> 
                7
            </div>

            <div className="tile 8">
              8
            </div>

            <div className="tile 9">
              9
            </div>

            <div className="tileOperator">
            ×
            </div>
        </div>
    );
}

export default SecondRowButtons;