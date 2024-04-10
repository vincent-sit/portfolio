import React from 'react';
import styled from 'styled-components';
import { IProject } from './type';
import aButton from '../../assets/gamepad/a-button.svg';
import projectFrame from '../../assets/project-frame.svg';

const Project = styled.div<{$count : number}>`
    scroll-snap-align: center;
    max-width: 1300px;
    height: 280px;
    background-color: #e1ebb0;
    border-radius: 30px;
    padding: 0 1.5rem 0 1.5rem;
    box-sizing: border-box;
    width: 72vw;
    position: relative;
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
    projects : IProject[]
}

export function ProjectsPage({projects} : ProjectsPageProps) {
    return (
        <Container id={'project-list'} $count={projects.length}>
            {projects.map((project) => {
                return (
                    <Project key={project.title} $count={projects.length}>
                        {/* <img src={projectFrame} style={{scale: '4', position: 'absolute', top: '65px', left: '364px', right: '0', bottom: '0'}}/> */}
                        <h1 style={{marginBlockStart: '0.3em'}}>{project.title}</h1>
                        <p style={{height: '40px', marginBlockEnd: '0.4em'}}>{project.description}</p>
                        <p style={{marginBlockStart: '0.8em'}}>Press <img src={aButton} style={{scale: '4', marginLeft: '0.5rem', marginRight: '0.5rem'}}/> to go to the {project.linkDestination}</p>
                    </Project>
                );
            })}
        </Container>
    );
}
