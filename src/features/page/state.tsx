import React from 'react';
import { proxy } from 'valtio';
import { Page } from '../base/action';

export class PageState {
    currentPage : Page = {
        name : 'default-page',
        component : () => {return (<></>);},
        image: ''
    };
}

export function createPageState() {
    return proxy(new PageState());
}
