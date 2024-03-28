import React from 'react';
import { PageState } from '../page/state';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
    justify-self: center;
    align-self: center;
`;

interface DisplayProps {
    state : PageState
}

export function Display({state} : DisplayProps) {
    return (
        <DisplayWrapper>
            <state.currentPage.component/>
        </DisplayWrapper>
    );
}
