import type { Project } from "../../models/Project"
import IconDisplay from "../../shared/iconDisplay"
import LinksButton from "./linksButton"
/*import type { SetStateAction, Dispatch } from "react"*/
import { translateProject } from "./translateProjects"
import type { Languages } from "../../models/Languages"
import styles from "./ProjectSection.module.css"

const ProjectsSection = ({projectsData, lan, /*setProject*/}:{projectsData:Project[],
    lan:Languages,
    /*setProject: Dispatch<SetStateAction<Project | null>>*/}) => {
    return  <section className={styles.projectsSection}>
        <h2>{translateProject(lan,"Projects")}</h2>
        <div className={styles.gridProjects}>
            {projectsData.map((e)=>{
                return <div /*onClick={()=>{setProject(e)}}*/ className={styles.cardProject}>
                    <div className={styles.cardProjectLeft}>
                        <h3>{e.name}</h3>
                        <div className={styles.cardProjectStack}>
                            {e.stack.map((e:string)=>{
                            return <IconDisplay name={e}/>
                            })}
                        </div>
                    </div>
                    <div className={styles.cardProjectRight}>
                        <div>
                            <img src={e.thumbnail} height="150px"></img>

                        </div>
                        <LinksButton linkPage={e.url} linkRepo={e.repo}/>
                    </div>
                </div>
            })}
        </div>
    </section>

}

export default ProjectsSection;