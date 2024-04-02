import { proxy } from 'valtio';
import { WorkExperience } from './type';

export class WorkExperienceState {
    workExperiences : WorkExperience[];

    constructor(workExperiences : WorkExperience[]) {
        this.workExperiences = workExperiences;
    }
    
    pointer : number = -1;
}

export function createWorkExperienceState(experiences : WorkExperience[]) {
    const state = new WorkExperienceState(experiences);
    if (experiences.length > 0) state.pointer = 0;
    return proxy(state);
}
