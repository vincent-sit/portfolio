import React from 'react';
import { WorkExperience as InternalWorkExperience } from './work-experience';
import { Page } from '../base/action';
import { WorkExperience } from './type';
import workExperienceImage from '../../assets/work-experience.png';


export function installWorkExperience() {
    const workExperiences : WorkExperience[] = [];

    const Component = () => {
        return (
            <InternalWorkExperience/>
        );
    };

    const WorkExperiencePage : Page = {
        name : 'work-experience',
        component: Component,
        image: workExperienceImage,
    };

    return {
        WorkExperiencePage
    };
}
