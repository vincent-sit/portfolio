import React from 'react';
import { WelcomePage as InternalWelcomePage } from './welcome-page';
import { Page } from '../base/action';
import projectImage from '../../assets/projects.png';

export function installWelcomePage(HomePage : Page, setCurrentPage : (page : Page) => void) {
    const Component = () => {
        return (
            <InternalWelcomePage/>
        );
    };

    const WelcomePage : Page = {
        name : 'projects',
        component : Component,
        image: projectImage,
        confirm: () => setCurrentPage(HomePage)
    };

    setCurrentPage(WelcomePage);

    return {
        WelcomePage
    };
}
