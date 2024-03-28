import { proxy } from 'valtio';
import { Action } from '../base/action';

export class SectionState {
    currentSection : Action = {};
}

export function createSectionState() {
    return proxy(new SectionState());
}
