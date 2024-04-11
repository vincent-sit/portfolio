import { ProjectState } from './state';

export class ProjectPresenter {
    up(state : ProjectState) {
        if (state.currentPointer <= 0) return;
        state.currentPointer--;
    }

    down(state : ProjectState) {
        if (state.currentPointer >= state.projects.length - 1) return;
        state.currentPointer++;
    }

    confirm(state : ProjectState) {
        const url = state.projects[state.currentPointer].link;
        if (!url) {
            alert('Not yet implemented');
            return;
        }
        window.open(url, '_blank')?.focus();
    }
}
