import React from 'react';
import styled from 'styled-components';

const ControllerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    background-color: #9682CF;
    padding: 2rem;
    boxing-size: border-box;
    border-radius: 50px; 
    position: absolute;
    bottom: 2rem;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
`;

interface ControllerPad {
    DirectionPad : React.ComponentType,
    ActionPad : React.ComponentType
}

export function ControllerPad({ DirectionPad, ActionPad } : ControllerPad) {
    return (
        <ControllerWrapper>
            <DirectionPad/>
            <ActionPad/>
        </ControllerWrapper>
    );
}
