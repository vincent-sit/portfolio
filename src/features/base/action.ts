export interface Action {
    left? : () => void;
    right? : () => void;
    up? : () => void;
    down? : () => void;
    confirm? : () => void;
    cancel? : () => void;
}

export interface Page extends Action {
    name : string;
    component : React.ComponentType;
    image: string; 
}
