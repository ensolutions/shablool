import React from 'react';
import GameNavbar from '../../components/game-navbar/game-navbar';

const Instructions = () => (
    <GameNavbar />
    <div className="main-content">
        <div className="row">
            <div className="screen-main-instructions">    
                <h1 className="instructions-h">      אתה במשחק!    </h1>    
                <h2 className="instructions-subheader instructions-h">      רואה את שמך על המסך?    </h2>    
            </div>
        </div>
    </div>
);

export default Instructions;

