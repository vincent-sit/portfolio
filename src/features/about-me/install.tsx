import React from 'react';
import { AboutMePage as InternalAboutMePage } from './about-me-page';
import { Page } from '../base/action';
import aboutMeImage from '../../assets/aboutMe.png';

export function installAboutMePage() {
    const Component = () => {
        return (
            <InternalAboutMePage/>
        );
    };

    const AboutMePage : Page = {
        name : 'about-me',
        component : Component,
        image: aboutMeImage
    };

    return {
        AboutMePage
    };
}
