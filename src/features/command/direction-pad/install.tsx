import React from 'react';
import { DirectionPad as InternalDirectionPad } from './direction-pad';
import { PageState } from '../../page/state';
import { useSnapshot } from 'valtio';

export function installDirectionPad(state : PageState) {
    const DirectionPad = () => {
        const snap = useSnapshot(state);
        return (
            <InternalDirectionPad state={snap as PageState}/>
        );
    };

    return {
        DirectionPad
    };
}
