import { proxy } from 'valtio';
import { IProject } from './type';

export class ProjectState {
    projects : IProject[];

    constructor(projects: IProject[]) {
        this.projects = projects;
    }

    currentPointer : number = 0;
}

export function createProjectState(projects: IProject[]) {
    const state = new ProjectState(projects);
    return proxy(state);
}
