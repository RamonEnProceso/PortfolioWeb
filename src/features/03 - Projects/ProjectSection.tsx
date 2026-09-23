import { useState } from "react"
import IconDisplay from "../../shared/iconDisplay"
import LinksButton from "./linksButton"
/*import type { SetStateAction, Dispatch } from "react"*/
import { translateProject } from "./translateProjects"
import type { PageData } from "../../models/PageData"
import styles from "./ProjectSection.module.css"

const ProjectsSection = ({data}:{data:Pick<PageData, "lan" | "projectsData" | "setProject">}) => {
    const [visible, setVisible] = useState(4)
    return  <section className={styles.projectsSection} id="projects">
        <h2>{translateProject(data.lan,"Projects")}</h2>
        <div className={styles.gridProjects}>
            {data.projectsData.slice(0, visible).map((e)=>{
                return <div key={e.name} onClick={()=>{data.setProject(e)}} className={styles.cardProject}>
                    <div className={styles.cardProjectLeft}>
                        <h3>{e.name}</h3>
                        <div className={styles.cardProjectStack}>
                            {e.stack.map((e:string)=>{
                            return <IconDisplay key={e} name={e}/>
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
        {visible < data.projectsData.length &&
            <button className={styles.showMore} onClick={()=>setVisible(v => v + 4)}>
                {translateProject(data.lan, "showMore")}
            </button>
        }
    </section>

}

export default ProjectsSection;