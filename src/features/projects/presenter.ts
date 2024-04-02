import { ProjectState } from './state';

const ITEM_HEIGHT = 120;
const PADDING = 48;

export class ProjectPresenter {
    up(state : ProjectState) {
        const list = document.getElementById('project-list');
        if (state.currentPointer <= 0 || !list) return;
        list.scrollTop -= ITEM_HEIGHT + PADDING;
        state.currentPointer--;
    }

    down(state : ProjectState) {
        const list = document.getElementById('project-list');
        if (state.currentPointer >= state.projects.length - 1 || !list) return;
        list.scrollTop += ITEM_HEIGHT + PADDING;
        state.currentPointer++;
    } 
}
