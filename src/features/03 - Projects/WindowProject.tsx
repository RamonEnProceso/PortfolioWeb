import type { PageData } from "../../models/PageData";
import IconDisplay from "../../shared/iconDisplay";
import LinksButton from "./linksButton";
import { translateProject } from "./translateProjects";
import styles from "./WindowProject.module.css"

const WindowProject = ({data}:{data:Pick<PageData,"project"|"setProject"|"lan">}) => {
    const projectSelected = data.project;

    return <div style={{display: projectSelected?"flex":"none"}} className={styles.container}>
        {projectSelected && (
            <div className={styles.window}>
                <button onClick={()=>{data.setProject(null)}} className={styles.closeButton}>X</button>
                <div className={styles.windowLeft}>
                    <div>
                        <h2>{projectSelected.name}</h2>
                        <div className={styles.description}>
                            {data.project?.description[data.lan].map((e)=>{
                                return <p className={styles.paragraph}>{e}</p>
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.stack}>
                            <h3>Stack</h3>
                            {projectSelected.stack.map((e:string)=>{
                                return <IconDisplay name={e}/>
                            })}
                        </div>
                        <div className={styles.libraries}>
                            {projectSelected.libraries&&<h3>{translateProject(data.lan,"Libraries")}</h3>}
                            {projectSelected.libraries?.map((e:string)=>{
                                return <IconDisplay name={e}/>
                            })}
                        </div>
                        <LinksButton linkPage={projectSelected.url} linkRepo={projectSelected.repo}/>
                    </div>
                </div>
                <div></div>
            </div>
        )
        }
    </div>
}

export default WindowProject;