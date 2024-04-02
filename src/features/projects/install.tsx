import React from 'react';
import { ProjectsPage as InternalProjectsPage } from './projects-page';
import { Page } from '../base/action';
import projectImage from '../../assets/projects.png';
import data from './data.json';
import { IProject } from './type';
import { ProjectPresenter } from './presenter';
import { createProjectState } from './state';

export function installProjectsPage() {
    const projectData : IProject[] = data.content;
    const presenter = new ProjectPresenter();
    const state = createProjectState(projectData);

    const up = () => presenter.up(state);
    const down = () => presenter.down(state);

    const Component = () => {
        return (
            <InternalProjectsPage projects={state.projects}/>
        );
    };

    const ProjectsPage : Page = {
        name : 'projects',
        component : Component,
        image: projectImage,
        up : up,
        down : down
    };

    return {
        ProjectsPage
    };
}
