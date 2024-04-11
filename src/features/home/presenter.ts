import { Page } from '../base/action';
import { reactToButton } from '../command/utilities';
import { HomePageState } from './state';

export class HomePresenter {
    right(state : HomePageState) {
        let validInput = false;
        if (state.pointer < state.pages.length - 1) {
            validInput = true;
            state.pointer++;
        }
        reactToButton(validInput);
    }

    left(state : HomePageState) {
        let validInput = false;
        if (state.pointer > 0) {
            state.pointer--;
            validInput = true;
        }
        reactToButton(validInput);
    }

    confirm(state : HomePageState, setCurrentPage : (page : Page) => void) {
        setCurrentPage(state.pages[state.pointer]);
        reactToButton(true);
    }

    reset(setCurrentPage : (page : Page) => void, homePage : Page) {
        setCurrentPage(homePage);
        reactToButton(true);
    }
}
