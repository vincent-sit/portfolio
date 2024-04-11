import React from 'react';
import styled from 'styled-components';
import { IProject } from './type';
import aButton from '../../assets/gamepad/a-button.svg';
import projectFrame from '../../assets/project-frame.svg';
import { ProjectState } from './state';

const Project = styled.div<{$count : number, $selected : boolean}>`
    scroll-snap-align: center;
    max-width: 1300px;
    height: 280px;
    background-color: #e1ebb0;
    border-radius: 30px;
    padding: 0 1.5rem 0 1.5rem;
    box-sizing: border-box;
    width: 72vw;
    position: relative;
    scale: ${props => props.$selected ? '1.02' : '1'};
    filter: ${props => props.$selected ? 'brightness(1)' : 'brightness(0.9)'};
`;

const Container = styled.div<{$count : number}>`
    max-height: 600px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    scroll-behavior: smooth;
    transition: all 0.25s ease-in;
    -ms-overflow-style: none;
    overflow: hidden;
    scroll-snap-type: y mandatory;
`;

interface ProjectsPageProps {
    state : ProjectState
}

export function ProjectsPage({state} : ProjectsPageProps) {
    return (
        <Container id={'project-list'} $count={state.projects.length}>
            {state.projects.map((project, index) => {
                return (
                    <Project key={project.title} $count={state.projects.length} $selected={state.currentPointer == index}>
                        <h1 style={{marginBlockStart: '0.3em'}}>{project.title}</h1>
                        <p style={{height: '40px', marginBlockEnd: '0.4em'}}>{project.description}</p>
                        <p style={{marginBlockStart: '0.8em'}}>Press <img src={aButton} style={{scale: '4', marginLeft: '0.5rem', marginRight: '0.5rem'}}/> to go to the {project.linkDestination}</p>
                    </Project>
                );
            })}
        </Container>
    );
}
