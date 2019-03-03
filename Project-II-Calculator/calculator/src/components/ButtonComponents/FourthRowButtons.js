import React from 'react';
import './Button.css';

function FourthRowButtons(props) {
    return(
        <div className="fourthRow">
            <div className="tile 1"> 
                1
            </div>

            <div className="tile 2">
              2
            </div>

            <div className="tile 3">
              3
            </div>

            <div className="tileOperator">
              +
            </div>
        </div>
    );
}

export default FourthRowButtons;