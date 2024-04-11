import { reactToButton } from '../command/utilities';
import { ProjectState } from './state';


export class ProjectPresenter {
    async up(state : ProjectState) {
        let validInput = false;
        if (state.currentPointer > 0) {
            state.currentPointer--;
            validInput = true;
        }

        reactToButton(validInput);
    }

    down(state : ProjectState) {
        let validInput = false;
        if (state.currentPointer < state.projects.length - 1) {
            state.currentPointer++;
            validInput = true;
        }

        reactToButton(validInput);
    }

    confirm(state : ProjectState) {
        const url = state.projects[state.currentPointer].link;
        if (!url) {
            alert('Not yet implemented');
            return;
        }
        window.open(url, '_blank')?.focus();
        reactToButton(true);
    }
}
