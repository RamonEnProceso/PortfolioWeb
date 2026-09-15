import profileData from "../assets/JSONs/profile.json"
import projectsData from "../assets/JSONs/projects.json"
import ProfileHeader from "./Header/profileHeader";
import ProjectsSection from "./Projects/ProjectSection";
import type { Project } from "../models/Project";
import { useState } from "react";
import WindowProject from "./Projects/WindowProject";

const PortfolioPage = () =>{
    const [project, setProject] = useState<Project | null>(null);
    const lan = "ES";
    return <>
        <ProfileHeader profileData={profileData} lan={lan}/>
        {/*<WindowProject data={project} />*/}
        <ProjectsSection lan={lan} projectsData={projectsData} setProject={setProject}/>
    </>
}

export default PortfolioPage;