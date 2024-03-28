import { Page } from '../base/action';
import { createPageState } from './state';

export function installPageState() {
    const state = createPageState();

    const setCurrentPage = (page : Page) => state.currentPage = page;
    const getCurrentPage = () => state.currentPage;

    return {
        state,
        getCurrentPage,
        setCurrentPage
    };
}
