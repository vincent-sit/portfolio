import React from 'react';
import { WorkExperienceCategory } from './type';
import styled, { keyframes } from 'styled-components';
import iconImage from '../../assets/work-experience-items/item-icon-back.svg';
import iconHighlight from '../../assets/work-experience-items/item-icon-selection.svg';

interface ItemBlockProps {
    displayText : string;
    icon: string;
    selected: boolean;
}

interface ItemRowProps {
    categories : WorkExperienceCategory[]
}

const ItemRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
`;

const Item = styled.div`
    display: grid;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 10rem;
    position: relative;
`;

const itemHighlightAnimation = keyframes`
    to { visibility: hidden; }
`;

const ItemHighlight = styled.img<{$selected : boolean}>`
    width: 88px;
    height: 88px;
    top: 4px;
    left: -4px;
    position: absolute;
    visibility: ${props => props.$selected ? 'visible' : 'hidden'};

    animation: ${itemHighlightAnimation} 0.8s steps(5, start) infinite;
    -webkit-animation: ${itemHighlightAnimation} 0.8s steps(5, start) infinite;
`;

export function ItemBlock({ displayText, icon, selected } : ItemBlockProps) {
    return (
        <Item>
            <ItemHighlight src={iconHighlight} $selected={selected}/>
            <img src={iconImage} style={{width: '64px', height: '64px', marginLeft: 'auto', marginRight: 'auto'}}/>
            <p style={{width: '80px', height: '24px', textAlign: 'center'}}>{displayText}</p>
        </Item>
    );
}

export function ItemGrid({ categories: workExperiences } : ItemRowProps) {
    return (
        <div>
            {workExperiences.map((category, index) => {
                return (
                    <div key={category.type}>                    
                        <h2>{category.type}</h2>
                        <ItemRow>
                            {category.content.map((content, innerIndex) => {
                                return (
                                    <ItemBlock 
                                        key={content.displayText}
                                        displayText={content.displayText}
                                        icon={content.icon}
                                        selected={index == 0 && innerIndex == 0}
                                    />
                                );
                            })}
                        </ItemRow>
                    </div>
                );
            })}
        </div>
    );
}
