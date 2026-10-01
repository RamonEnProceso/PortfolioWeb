import type { Project } from "./Project";
import type { Profile } from "./Profile";
import type { SetStateAction, Dispatch } from "react";

export interface PageData {
    projectsData:Project[];
    project: Project|null;
    profileData: Profile;
    setProject: Dispatch<SetStateAction<Project | null>>;
}
