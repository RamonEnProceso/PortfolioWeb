import type { Project } from "./Project";
import type { Languages } from "./Languages";
import type { Profile } from "./Profile";
import type { SetStateAction, Dispatch } from "react";

export interface PageData {
    projectsData:Project[];
    profileData: Profile;
    lan:Languages;
    setLan:Dispatch<SetStateAction<Languages>>;
    setProject: Dispatch<SetStateAction<Project | null>>;
}