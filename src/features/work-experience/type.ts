export interface WorkExperience {
    displayText : string;
    role: string;
    tenure: string;
    content : string;
    icon : string;
}

export interface WorkExperienceCategory {
    type : string;
    content : WorkExperience[];
}
