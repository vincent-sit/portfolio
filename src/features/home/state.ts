import { proxy } from 'valtio';
import { Page } from '../base/action';

export class HomePageState {
    pages : Page[];

    constructor(pages : Page[]) {
        this.pages = pages;
    }

    pointer : number = -1;
}

export function createHomePageState(pages : Page[]) {
    const state = new HomePageState(pages);
    if (pages.length > 0) state.pointer = 0;
    return proxy(state);
}
