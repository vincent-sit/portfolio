import React from 'react';
import { WorkExperience as InternalWorkExperience } from './work-experience';
import { Page } from '../base/action';
import data from './data.json';
import { WorkExperience, WorkExperienceCategory } from './type';
import workExperienceImage from '../../assets/work-experience.png';
import { WorkExperienceState, createWorkExperienceState } from './state';
import { useSnapshot } from 'valtio';

export function installWorkExperience() {
    const workExperiences : WorkExperienceCategory[] = data.workExperience;
    const state = createWorkExperienceState(workExperiences);

    const Component = () => {
        const snap = useSnapshot(state);
        return (
            <InternalWorkExperience state={snap as WorkExperienceState}/>
        );
    };

    const WorkExperiencePage : Page = {
        name : 'work-experience',
        component: Component,
        image: workExperienceImage,
        up: () => {},
        down: () => {},
        left: () => {},
        right: () => {}
    };

    return {
        WorkExperiencePage
    };
}
