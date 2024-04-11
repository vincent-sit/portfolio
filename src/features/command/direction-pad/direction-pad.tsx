import React from 'react';
import styled from 'styled-components';
import { PageState } from '../../page/state';
import upButton from '../../../assets/gamepad/up-button.svg';
import downButton from '../../../assets/gamepad/down-button.svg';
import leftButton from '../../../assets/gamepad/left-button.svg';
import rightButton from '../../../assets/gamepad/right-button.svg';

const Pad = styled.div`
    display : grid;
    grid-template-rows : repeat(3, 1fr);
    grid-template-columns : repeat(3, 1fr);
    width: 15px;
    height: 15px;
    position: absolute;
    top: 6px;
    left: 2px;

    >:nth-child(1) {
        grid-column: 2;
        grid-row: 1;
    }

    >:nth-child(2) {
        grid-column: 2;
        grid-row: 3;
    }

    >:nth-child(3) {
        grid-column: 1;
        grid-row: 2;
    }

    >:nth-child(4) {
        grid-column: 3;
        grid-row: 2;
    }
`;

const DirectionButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 0;

    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:active
    {
        transform: translateY(1px);
    }
`;

interface DirectionPadProps {
    state : PageState
}

export function DirectionPad({ state } : DirectionPadProps) {
    return (
        <Pad>
            <DirectionButton onClick={() => state.currentPage.up?.()}>
                <img src={upButton} alt='upButton' style={{paddingBottom: '1px'}}/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.down?.()}>
                <img src={downButton} alt='downButton' style={{paddingTop: '1px'}}/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.left?.()}>
                <img src={leftButton} alt='leftButton' style={{paddingRight: '1px'}}/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.right?.()}>
                <img src={rightButton} alt='rightpButton' style={{paddingLeft: '1px'}}/>
            </DirectionButton>
        </Pad>
    );
}
