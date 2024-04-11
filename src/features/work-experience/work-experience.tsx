import React from 'react';
import styled from 'styled-components';
import { WorkExperienceState } from './state';
import { ItemGrid } from './item-block';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    scroll-snap-align: start;
    flex-basis: calc(25% - 30px);
`;

const Inventory = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    width: 70vw;
`;

const InfoScreen = styled.div`
    background-color: pink;
`;

// const ItemGrid = styled.div`
//     background-color: cyan;
// `;

interface WorkExperienceProps {
    state : WorkExperienceState
}

export function WorkExperience({ state } : WorkExperienceProps) {
    return (
        <Inventory>
            <ItemGrid categories={state.workExperiences}/>
            <InfoScreen>

            </InfoScreen>
        </Inventory>
    );
}
