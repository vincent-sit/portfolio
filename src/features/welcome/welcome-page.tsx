import React from 'react';
import aButton from '../../assets/gamepad/a-button.svg';

export function WelcomePage() {
    return (
        <div>
            <h1>WELCOME! COME AND PLAY AROUND!</h1>
            <p>PAGE STILL UNDER CONSTRUCTION...</p>
            <p>MOBILE FRIENDLY VERSION TO BE IMPLEMENTED...</p>
            <p style={{marginBlockStart: '0.8em'}}>Press <img src={aButton} style={{scale: '4', marginLeft: '0.5rem', marginRight: '0.5rem'}}/> to start!</p>
        </div>
    );
}
