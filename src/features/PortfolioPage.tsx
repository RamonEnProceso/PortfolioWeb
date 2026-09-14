import profileData from "../assets/JSONs/profile.json"
import ProfileHeader from "./Header/profileHeader";

const PortfolioSection = () =>{
    
    return <>
        <ProfileHeader profileData={profileData} lan="ES"/>
    </>
}

export default PortfolioSection;