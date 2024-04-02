import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    scroll-snap-align: start;
    flex-basis: calc(25% - 30px);
`;

const Inventory = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
`;

export function WorkExperience() {
    return (
        <Inventory>
            <Item>ASB</Item>
            <Item>PWC</Item>
            <Item>Rialto</Item>
            <Item>Research Assistant</Item>
        </Inventory>
    );
}
