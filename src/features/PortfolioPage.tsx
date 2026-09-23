import profileData from "../assets/JSONs/profile.json"
import projectsData from "../assets/JSONs/projects.json"
import ProfileHeader from "./01 - AboutMe/profileBioSkills";
import ProjectsSection from "./03 - Projects/ProjectSection";
import NamePhoto from "./00 - Header/namePhoto";
import type { Project } from "../models/Project";
import { useState } from "react";
import type { Languages } from "../models/Languages";
import type { PageData } from "../models/PageData";
import Menu from "./Menu/portfolioNav";
import WindowProject from "./03 - Projects/WindowProject";
import Background from "./Background/Background";
import ContactMe from "./04 - ContactMe/contactMe";
import Separator from "../shared/separator";

const PortfolioPage = () =>{
    const [project, setProject] = useState<Project | null>(null);
    const [lan, setLan] = useState<Languages>("ES");

    const pageData :PageData ={
        "lan":lan,
        "setLan": setLan,
        "project": project,
        "profileData":profileData,
        "projectsData":projectsData,
        "setProject": setProject
    }

    return <>
        <Menu data={pageData}/>
        <WindowProject data={pageData} />
        <div className="sections">
            <NamePhoto data={pageData}/>
            <Separator/>
            <ProfileHeader data={pageData}/>
            <Separator/>
            <ProjectsSection data={pageData}/>
            <Separator/>
            <ContactMe data={pageData}></ContactMe>
        </div>
        <Background/>
    </>
}

export default PortfolioPage;