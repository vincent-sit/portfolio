import styled from 'styled-components';
import React from 'react';

export const Button = styled.button<{$actionable: boolean}>`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    // background-color: ${ props => props.$actionable ? '#FBB0DA' : '#464485'};

    &:hover {
        cursor: ${props => props.$actionable ? 'pointer' : 'mouse'};
        box-shadow: ${props => props.$actionable ? '1px 1px 2px rgba(#fff, .2)' : 'none'};
        filter: ${props => props.$actionable ? 'brightness(85%)' : 'none'};
        transition: all 150ms linear;
        transform: ${props => props.$actionable ? 'scale(1.03)' : 'none'}; 
    }
`;

export const ButtonTop = () => {
    return (
        <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMin slice"
            style={{width: '100%', paddingBottom: '92%', height: '1px', overflow: 'visible'}}>
            <rect width='6' height='1' x='5' y='0' fill='#292831' />
    
            <rect width='10' height='1' x='3' y='1' fill='#292831' />
            <rect width='6' height='1' x='5' y='1' fill='#fbbbad' />
          
            <rect width='12' height='1' x='2' y='2' fill='#292831' />
            <rect width='10' height='1' x='3' y='2' fill='#fbbbad' />
            <rect width='6' height='1' x='5' y='2' fill='#ee8695' />
          
            <rect width='14' height='2' x='1' y='3' fill='#292831' />
            <rect width='12' height='2' x='2' y='3' fill='#fbbbad' />
            <rect width='10' height='2' x='3' y='3' fill='#ee8695' />
        </svg>
    );
};

export const ButtonImage = () => {
    return (
        <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMin slice"
            style={{width: '100%', paddingBottom: '92%', height: '1px', overflow: 'visible', strokeLinecap: 'square'}}>
            <rect width='6' height='1' x='5' y='0' fill='#292831' />            
            <rect width='10' height='1' x='3' y='1' fill='#292831' />
            <rect width='6' height='1' x='5' y='1' fill='#fbbbad' />
            <rect width='12' height='1' x='2' y='2' fill='#292831' />
            <rect width='10' height='1' x='3' y='2' fill='#fbbbad' />
            <rect width='6' height='1' x='5' y='2' fill='#ee8695' />
            <rect width='14' height='2' x='1' y='3' fill='#292831' />
            <rect width='12' height='2' x='2' y='3' fill='#fbbbad' />
            <rect width='10' height='2' x='3' y='3' fill='#ee8695' />
            <rect width="16" height="6" x="0" y="5" fill="#292831" />
            <rect width="14" height="6" x="1" y="5" fill="#fbbbad" />
            <rect width="12" height="6" x="2" y="5" fill="#ee8695" />
            <rect width='14' height='2' x='1' y='11' fill='#292831' />
            <rect width='12' height='2' x='2' y='11' fill='#fbbbad' />
            <rect width='10' height='2' x='3' y='11' fill='#ee8695' />
            <rect width='12' height='1' x='2' y='13' fill='#292831' />
            <rect width='10' height='1' x='3' y='13' fill='#fbbbad' />
            <rect width='6' height='1' x='5' y='13' fill='#ee8695' />
            <rect width='10' height='1' x='3' y='14' fill='#292831' />
            <rect width='6' height='1' x='5' y='14' fill='#fbbbad' />
            <rect width='6' height='1' x='5' y='15' fill='#292831' />
        </svg>
    );
};

export const ButtonBody = () => {
    return (
        <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMin slice"
            style={{width: '100%', paddingBottom: '92%', height: '1px', overflow: 'visible'}}>

        </svg>
    );
};
