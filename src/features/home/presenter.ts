import { Page } from '../base/action';
import { HomePageState } from './state';

export class HomePresenter {
    right(state : HomePageState) {
        if (state.pointer >= state.pages.length - 1) return;
        state.pointer++;
    }

    left(state : HomePageState) {
        if (state.pointer <= 0) return;
        state.pointer--;
    }

    confirm(state : HomePageState, setCurrentPage : (page : Page) => void) {
        setCurrentPage(state.pages[state.pointer]);
    }

    reset(setCurrentPage : (page : Page) => void, homePage : Page) {
        setCurrentPage(homePage);
    }
}
