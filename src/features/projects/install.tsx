import React from 'react';
import { ProjectsPage as InternalProjectsPage } from './projects-page';
import { Page } from '../base/action';
import projectImage from '../../assets/projects.png';

export function installProjectsPage() {
    const Component = () => {
        return (
            <InternalProjectsPage/>
        );
    };

    const ProjectsPage : Page = {
        name : 'projects',
        component : Component,
        image: projectImage
    };

    return {
        ProjectsPage
    };
}
