import React from 'react';
import styled from 'styled-components';
import { installHomePage } from './features/home/install';
import { installPageState } from './features/page/install';
import { installAboutMePage } from './features/about-me/install';
import { installProjectsPage } from './features/projects/install';
import { installDisplay } from './features/display/install';
import { installCommand } from './features/command/install';
import { installWelcomePage } from './features/welcome/install';

const AppWrapper = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    position: relative;
    height: 100vh;
`;

export function installApp() {
    const { state : pageState, getCurrentPage, setCurrentPage} = installPageState();
    const { AboutMePage } = installAboutMePage();
    const { ProjectsPage } = installProjectsPage();
    const { HomePage, reset } = installHomePage([AboutMePage, ProjectsPage], setCurrentPage);
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
