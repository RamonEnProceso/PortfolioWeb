import IconDisplay from "../../shared/iconDisplay"
import LinksButton from "./linksButton"
/*import type { SetStateAction, Dispatch } from "react"*/
import { translateProject } from "./translateProjects"
import type { PageData } from "../../models/PageData"
import styles from "./ProjectSection.module.css"

const ProjectsSection = ({data}:{data:Pick<PageData, "lan" | "projectsData">}) => {
    return  <section className={styles.projectsSection} id="projects">
        <h2>{translateProject(data.lan,"Projects")}</h2>
        <div className={styles.gridProjects}>
            {data.projectsData.map((e)=>{
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
                        <div className={styles.cardProjectThumbnail}>
                            <img src={e.thumbnail[0]}></img>
                        </div>
                        <div className={styles.cardProjectButtons}>
                            <LinksButton linkPage={e.url} linkRepo={e.repo}/>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </section>

}

export default ProjectsSection;