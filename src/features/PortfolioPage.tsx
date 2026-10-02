import profileData from "../assets/JSONs/profile.json"
import projectsData from "../assets/JSONs/projects.json"
import ProfileHeader from "./01 - AboutMe/profileBioSkills";
import ProjectsSection from "./03 - Projects/ProjectSection";
import NamePhoto from "./00 - Header/namePhoto";
import type { Project } from "../models/Project";
import { useState } from "react";
import type { PageData } from "../models/PageData";
import Menu from "./Menu/portfolioNav";
import WindowProject from "./03 - Projects/WindowProject";
import Background from "./Background/Background";
import ContactMe from "./04 - ContactMe/contactMe";
import Separator from "../shared/separator";
import { CertificateProvider } from "./shared/CertificateContext";
import WindowCertificates from "./01 - AboutMe/WindowCertificates";

const PortfolioPage = () =>{
    const [project, setProject] = useState<Project | null>(null);

    const pageData :PageData ={
        "project": project,
        "profileData":profileData,
        "projectsData":projectsData,
        "setProject": setProject
    }

    return <>
        <Menu/>
        <CertificateProvider>
            <WindowCertificates/>
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
        </CertificateProvider>
        <Background/>
    </>
}

export default PortfolioPage;
