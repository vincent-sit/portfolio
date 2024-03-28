import { Action } from '../base/action';
import { createSectionState } from './state';

export function installSectionState() {
    const state = createSectionState();

    const setCurrentSection = (page : Action) => state.currentSection = page;
    const getCurrentSection = () => state.currentSection;

    return {
        state,
        getCurrentSection,
        setCurrentSection
    };
}
