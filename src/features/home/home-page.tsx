import React from 'react';
import { Page } from '../base/action';
import styled, { keyframes } from 'styled-components';
import leftButton from '../../assets/gamepad/left-button.svg';
import rightButton from '../../assets/gamepad/right-button.svg';

const PageInfo = styled.div`
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: absolute;
    top: 5rem;
    right : 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
`;

const Pages = styled.div`
    position: relative;

    height: 500px;
`;

const buttonAnimation = keyframes`
    0% { transform: translateY(0); transition-timing-function: ease-in;}
    50% { transform: translateY(2px); transition-timing-function: ease-out;}
    55% { transform: translateY(2.2px); transition-timing-function: ease-in-out;}
    80% { transform: translateY(0px); transition-timing-function: ease-in;}
    85% { transform: translateY(-0.1px); transition-timing-function: ease-in-out;}
`;

const LeftButton = styled.img<{$visible : boolean}>`
    scale: 8;
    position: absolute;
    top: 270px;
    right: 300px;
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    animation-name: ${buttonAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const RightButton = styled.img<{$visible : boolean}>`
    scale: 8;
    position: absolute;
    top: 270px;
    left: 300px;
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    animation-name: ${buttonAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

interface HomePageProps {
    pages : Page[],
    pointer : number
}

export function HomePage({ pages, pointer } : HomePageProps) {
    return (
        <Pages>
            <LeftButton src={leftButton} $visible={pointer > 0}/>
            <RightButton src={rightButton} $visible={pointer < pages.length - 1}/>
            {pages.map((page, index) => {
                return (
                    <PageInfo key={page.name} style={{visibility: pointer === index ? 'visible' : 'hidden'}}>
                        <img src={page.image} style={{width: '400px'}}/>
                        {page.name}
                    </PageInfo>
                );
            })}
        </Pages>
    );
}
