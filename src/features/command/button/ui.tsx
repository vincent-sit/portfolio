import styled from 'styled-components';

export const Button = styled.button<{actionable: boolean}>`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    background-color: ${ props => props.actionable ? '#FBB0DA' : '#464485'};

    &:hover {
        cursor: ${props => props.actionable ? 'pointer' : 'mouse'};
        box-shadow: ${props => props.actionable ? '1px 1px 2px rgba(#fff, .2)' : 'none'};
        filter: ${props => props.actionable ? 'brightness(85%)' : 'none'};
        transition: all 150ms linear;
        transform: ${props => props.actionable ? 'scale(1.03)' : 'none'}; 
    }}
`;

