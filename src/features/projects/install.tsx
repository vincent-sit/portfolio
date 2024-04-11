import React from 'react';
import { ProjectsPage as InternalProjectsPage } from './projects-page';
import { Page } from '../base/action';
import projectImage from '../../assets/projects.png';
import data from './data.json';
import { IProject } from './type';
import { ProjectPresenter } from './presenter';
import { ProjectState, createProjectState } from './state';
import { useSnapshot } from 'valtio';

export function installProjectsPage() {
    const projectData : IProject[] = data.content;
    const presenter = new ProjectPresenter();
    const state = createProjectState(projectData);

    const Component = () => {
        const snap = useSnapshot(state);
        return (
            <InternalProjectsPage state={snap as ProjectState}/>
        );
    };

    const ProjectsPage : Page = {
        name : 'projects',
        component : Component,
        image: projectImage,
        up : () => presenter.up(state),
        down : () => presenter.down(state),
        left: () => {},
        right : () => {},
        confirm: () => presenter.confirm(state)
    };

    return {
        ProjectsPage
    };
}
