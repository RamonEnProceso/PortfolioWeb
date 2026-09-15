import profileData from "../assets/JSONs/profile.json"
import projectsData from "../assets/JSONs/projects.json"
import ProfileHeader from "./Header/profileHeader";
import ProjectsSection from "./Projects/ProjectSection";

const PortfolioPage = () =>{
    
    return <>
        <ProfileHeader profileData={profileData} lan="ES"/>
        <ProjectsSection projectsData={projectsData}/>
    </>
}

export default PortfolioPage;