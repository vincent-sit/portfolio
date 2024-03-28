import React from 'react';
import { installDirectionPad } from './direction-pad/install';
import { installActionPad } from './action-pad/install';
import { ControllerPad as InternalControllerPad } from './controller-pad';
import { PageState } from '../page/state';

export function installCommand(state : PageState, reset: () => void) {
    const { DirectionPad } = installDirectionPad(state);
    const { ActionPad } = installActionPad(state, reset);
    const ControllerPad = () => {
        return (
            <InternalControllerPad DirectionPad={DirectionPad} ActionPad={ActionPad}/>
        );
    };

    return {
        ControllerPad
    };
}
