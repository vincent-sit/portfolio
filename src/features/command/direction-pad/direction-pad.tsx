import React from 'react';
import styled from 'styled-components';
import { Page } from '../../base/action';
import { Button } from '../button/ui';
import { PageState } from '../../page/state';

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

interface DirectionPadProps {
    state : PageState
}

export function DirectionPad({ state } : DirectionPadProps) {
    return (
        <Controller>
            <Button onClick={() => state.currentPage.up?.()} actionable={typeof state.currentPage.up !== 'undefined'}>
                <i className="material-icons">arrow_drop_up</i>
            </Button>
            <Button onClick={() => state.currentPage.down?.()} actionable={typeof state.currentPage.down !== 'undefined'}>
                <i className="material-icons">arrow_drop_down</i>
            </Button>
            <Button onClick={() => state.currentPage.left?.()} actionable={typeof state.currentPage.left !== 'undefined'}>
                <i className="material-icons">arrow_left</i>
            </Button>
            <Button onClick={() => state.currentPage.right?.()} actionable={typeof state.currentPage.right !== 'undefined'}>
                <i className="material-icons">arrow_right</i>
            </Button>
        </Controller>
    );
}
