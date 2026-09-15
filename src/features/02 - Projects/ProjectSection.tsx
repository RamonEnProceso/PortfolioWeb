import type { Project } from "../../models/Project"
import IconDisplay from "../../shared/iconDisplay"
import LinksButton from "./linksButton"
import type { SetStateAction, Dispatch } from "react"
import { translateProject } from "./translateProjects"
import type { Languages } from "../../models/Languages"

const ProjectsSection = ({projectsData, lan, setProject}:{projectsData:Project[],
    lan:Languages,
    setProject: Dispatch<SetStateAction<Project | null>>}) => {
    return  <section>
        <h2>{translateProject(lan,"Projects")}</h2>
        <div>
            {projectsData.map((e)=>{
                return <div onClick={()=>{setProject(e)}}>
                    <h3>{e.name}</h3>
                    <div>
                        {e.stack.map((e:string)=>{
                        return <IconDisplay name={e}/>
                        })}
                    </div>
                    <div><img src={e.thumbnail} height="150px"></img></div>
                    <LinksButton linkPage={e.url} linkRepo={e.repo}/>
                </div>
            })}
        </div>
    </section>

}

export default ProjectsSection;