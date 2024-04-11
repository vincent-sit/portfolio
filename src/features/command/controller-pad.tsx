import React from 'react';
import styled from 'styled-components';
import gamepad from '../../assets/gamepad/gamepad.svg';

const Controller = styled.div`
    z-index: 1;
    margin: auto;
`;

interface ControllerPad {
    DirectionPad : React.ComponentType,
    ActionPad : React.ComponentType
}

export function ControllerPad({ DirectionPad, ActionPad } : ControllerPad) {
    return (
        <Controller>
            <div style={{position: 'relative', scale: '8', placeSelf: 'center'}}>
                <img src={gamepad} id='controller-pad-img'/>
                <DirectionPad/>
                <ActionPad/>
            </div>
        </Controller>
    );
}
