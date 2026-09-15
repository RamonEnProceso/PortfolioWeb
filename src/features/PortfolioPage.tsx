import profileData from "../assets/JSONs/profile.json"
import projectsData from "../assets/JSONs/projects.json"
import ProfileHeader from "./01 - AboutMe/profileHeader";
import ProjectsSection from "./03 - Projects/ProjectSection";
import NamePhoto from "./00 - Header/namePhoto";
/*import type { Project } from "../models/Project";
import { useState } from "react";*/

/*import WindowProject from "./03 - Projects/WindowProject";*/

const PortfolioPage = () =>{
    /*const [project, setProject] = useState<Project | null>(null);*/
    const lan = "ES";
    return <>
        <NamePhoto profileData={profileData} lan={lan}/>
        <ProfileHeader profileData={profileData} lan={lan}/>
        {/*<WindowProject data={project} />*/}
        <ProjectsSection lan={lan} projectsData={projectsData} /*setProject={setProject}*/ />
    </>
}

export default PortfolioPage;