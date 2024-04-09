import React from 'react';
import styled from 'styled-components';
import { installHomePage } from './features/home/install';
import { installPageState } from './features/page/install';
import { installAboutMePage } from './features/about-me/install';
import { installProjectsPage } from './features/projects/install';
import { installDisplay } from './features/display/install';
import { installCommand } from './features/command/install';
import { installWelcomePage } from './features/welcome/install';
import { installWorkExperience } from './features/work-experience/install';

const AppWrapper = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

export function installApp() {
    const { state : pageState, getCurrentPage, setCurrentPage} = installPageState();
    const { AboutMePage } = installAboutMePage();
    const { ProjectsPage } = installProjectsPage();
    const { WorkExperiencePage } = installWorkExperience();
    const { HomePage, reset } = installHomePage([AboutMePage, ProjectsPage, WorkExperiencePage], setCurrentPage);
    const { WelcomePage } = installWelcomePage(HomePage, setCurrentPage);
    const { Display } = installDisplay(pageState);
    const { ControllerPad } = installCommand(pageState, reset);

    const App = () => {
        return (
            <AppWrapper>
                <Display/>
                <ControllerPad/>
            </AppWrapper>
        );
    };

    return {
        App
    };
}
