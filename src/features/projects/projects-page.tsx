import React from 'react';
import styled from 'styled-components';
import { IProject } from './type';

const Project = styled.div<{$count : number}>`
    scroll-snap-align: center;
    min-width: 120px;
    height: 600px;
    background-color: deeppink;
    border-radius:8px;
`;

const Container = styled.div<{$count : number}>`
    max-height: 110px;
    width: 70vw;
    padding: 50px 10px;
    display: flex;
    flex-direction: column;
    gap: 48px;
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
                    </Project>
                );
            })}
        </Container>
    );
}
