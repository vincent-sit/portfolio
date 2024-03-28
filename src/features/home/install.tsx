import React from 'react';
import { HomePageState, createHomePageState } from './state';
import { Page } from '../base/action';
import { HomePresenter } from './presenter';
import { HomePage as InternalHomePage } from './home-page';
import { useSnapshot } from 'valtio';

export function installHomePage(pages : Page[], setCurrentPage : (page : Page) => void) {
    const state = createHomePageState(pages);
    const presenter = new HomePresenter();
    
    const left = () => presenter.left(state);
    const right = () => presenter.right(state);
    const confirm = () => presenter.confirm(state, setCurrentPage);
    const reset = () => presenter.reset(setCurrentPage, HomePage);

    const component = () => {
        const snap = useSnapshot(state);
        return (
            <InternalHomePage pages={pages} pointer={snap.pointer}/>
        );
    };

    const HomePage : Page = {
        name : 'home',
        component : component,
        image: '',
        left : left,
        right : right,
        confirm : confirm
    };

    return {
        HomePage,
        reset
    };
}

