import React from 'react';
import { PageState } from '../page/state';
import { Display as InternalDisplay } from './display';
import { useSnapshot } from 'valtio';

export function installDisplay(state : PageState) {
    const Display = () => {
        const snap = useSnapshot(state) as PageState;
        return (
            <InternalDisplay state={snap}/>
        );
    };

    return {
        Display
    };
}
