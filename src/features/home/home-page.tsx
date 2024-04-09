import React from 'react';
import { Page } from '../base/action';
import styled from 'styled-components';

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
`;

const Pages = styled.div`
    position: relative;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
    height: 500px;
`;

interface HomePageProps {
    pages : Page[],
    pointer : number
}

export function HomePage({ pages, pointer } : HomePageProps) {
    return (
        <Pages>
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
