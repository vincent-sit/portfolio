import React from 'react';
import { ActionPad as InternalActionPad } from './action-pad';
import { PageState } from '../../page/state';
import { useSnapshot } from 'valtio';

export function installActionPad(state : PageState, reset: () => void) {
    const ActionPad = () => {
        const snap = useSnapshot(state);
        return (
            <InternalActionPad state={snap as PageState} reset={reset}/>
        );
    };

    return {
        ActionPad
    };
}
