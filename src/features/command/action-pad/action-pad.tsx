import React from 'react';
import styled from 'styled-components';
import { Button } from '../button/ui';
import { PageState } from '../../page/state';

const Controller = styled.div`
    display : grid;
    grid-template-rows : repeat(2, 1fr);
    grid-template-columns : repeat(2, 1fr);
    width: 100px;
    height: 100px;

    >:nth-child(1) {
        grid-column: 1;
        grid-row: 2;
    }

    >:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
    }
`;

interface ActionPadProps {
    state : PageState,
    reset: () => void
}

export function ActionPad({ state, reset } : ActionPadProps) {
    return (
        <Controller>
            <Button onClick={() => state.currentPage.confirm?.()} $actionable={typeof state.currentPage.confirm !== 'undefined'}>
                <i className="material-icons">radio_button_checked</i>
            </Button>
            <Button onClick={reset} $actionable={true}>
                <i className="material-icons">home</i>
            </Button>
        </Controller>
    );
}
