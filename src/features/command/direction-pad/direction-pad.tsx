import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/ui';
import { PageState } from '../../page/state';
import upButton from '../../../assets/gamepad/up-button.svg';
import downButton from '../../../assets/gamepad/down-button.svg';
import leftButton from '../../../assets/gamepad/left-button.svg';
import rightButton from '../../../assets/gamepad/right-button.svg';

const Controller = styled.div`
    display : grid;
    grid-template-rows : repeat(3, 1fr);
    grid-template-columns : repeat(3, 1fr);
    width: 150px;
    height: 150px;

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
`;

interface DirectionPadProps {
    state : PageState
}

export function DirectionPad({ state } : DirectionPadProps) {
    return (
        <Controller>
            <DirectionButton onClick={() => state.currentPage.up?.()}>
                <img src={upButton} alt='upButton'  height='50' width='50'/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.down?.()}>
                <img src={downButton} alt='downButton'  height='50' width='50'/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.left?.()}>
                <img src={leftButton} alt='leftButton'  height='50' width='50'/>
            </DirectionButton>
            <DirectionButton onClick={() => state.currentPage.right?.()}>
                <img src={rightButton} alt='rightpButton'  height='50' width='50'/>
            </DirectionButton>
        </Controller>
    );
}
