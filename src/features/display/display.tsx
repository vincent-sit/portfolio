import React from 'react';
import { PageState } from '../page/state';
import styled from 'styled-components';
import backgroundFrame from '../../assets/background-frame.svg';

const DisplayWrapper = styled.div`
    margin: auto;
    justify-self: center;
`;

const Frame = styled.img`
    scale: 8;
    position: fixed;
`;

interface DisplayProps {
    state : PageState
}

export function Display({state} : DisplayProps) {
    return (
        <DisplayWrapper>
            {/* <Frame src={backgroundFrame}/> */}
            <state.currentPage.component/>
        </DisplayWrapper>
    );
}
