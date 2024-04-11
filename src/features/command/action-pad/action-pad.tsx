import React from 'react';
import styled from 'styled-components';
import { PageState } from '../../page/state';
import aButton from '../../../assets/gamepad/a-button.svg';
import bButton from '../../../assets/gamepad/b-button.svg';

const Pad = styled.div`
    display : grid;
    grid-template-rows : repeat(2, 1fr);
    grid-template-columns : repeat(2, 1fr);
    position: absolute;
    top: 8px;
    right: 3px;

    >:nth-child(1) {
        grid-column: 1;
        grid-row: 2;
    }

    >:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
    }
`;

const ActionButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    font-size: 0;

    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:active
    {
        transform: translateY(1px);
    }
`;

interface ActionPadProps {
    state : PageState,
    reset: () => void
}

export function ActionPad({ state, reset } : ActionPadProps) {
    return (
        <Pad>
            <ActionButton onClick={() => state.currentPage.confirm?.()}>
                <img src={aButton} alt='upButton'/>
            </ActionButton>
            <ActionButton onClick={reset}>
                <img src={bButton} alt='upButton'/>
            </ActionButton>
        </Pad>
    );
}
