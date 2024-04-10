import React from 'react';
import styled from 'styled-components';
import { IProject } from './type';
import aButton from '../../assets/gamepad/a-button.svg';

const Project = styled.div<{$count : number}>`
    scroll-snap-align: center;
    max-width: 1200px;
    height: 300px;
    background-color: deeppink;
    border-radius:8px;
    padding: 0 1rem 0 1rem;
    width: 70vw;
`;

const Container = styled.div<{$count : number}>`
    max-height: 600px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
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
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>Press <img src={aButton} style={{scale: '3', marginLeft: '0.5rem', marginRight: '0.5rem'}}/> to go to the {project.linkDestination}</p>
                    </Project>
                );
            })}
        </Container>
    );
}
