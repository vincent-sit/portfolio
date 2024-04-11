import { proxy } from 'valtio';
import { WorkExperienceCategory } from './type';

export class WorkExperienceState {
    workExperiences : WorkExperienceCategory[];

    constructor(workExperiences : WorkExperienceCategory[]) {
        this.workExperiences = workExperiences;
    }
    
    rowPointer : number = -1;
    colPointer : number = -1;
}

export function createWorkExperienceState(experiences : WorkExperienceCategory[]) {
    const state = new WorkExperienceState(experiences);
    if (experiences.length > 0) {
        state.rowPointer = 0;
        state.colPointer = 0;
    }

    return proxy(state);
}
