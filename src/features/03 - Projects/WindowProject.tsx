import type { PageData } from "../../models/PageData";
import IconDisplay from "../../shared/iconDisplay";
import LinksButton from "./linksButton";
import { useTranslateProject } from "./translateProjects";
import { useLan } from "../shared/LanContext";
import styles from "./WindowProject.module.css"

const WindowProject = ({data}:{data:Pick<PageData,"project"|"setProject">}) => {
    const projectSelected = data.project;
    const translateProject = useTranslateProject();
    const { lan } = useLan();

    return <div style={{display: projectSelected?"flex":"none"}} className={styles.container}>
        {projectSelected && (
            <div className={styles.window}>
                <button onClick={()=>{data.setProject(null)}} className={styles.closeButton}>X</button>
                <div className={styles.windowLeft}>
                    <div>
                        <h2>{projectSelected.name}</h2>
                        <div className={styles.description}>
                            {data.project?.description[lan].map((e,i)=>{
                                return <p key={i} className={styles.paragraph}>{e}</p>
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.stack}>
                            <h3>Stack</h3>
                            {projectSelected.stack.map((e:string, i)=>{
                                return <IconDisplay key={i} name={e}/>
                            })}
                        </div>
                        <div className={styles.libraries}>
                            {projectSelected.libraries&&<h3>{translateProject("Libraries")}</h3>}
                            {projectSelected.libraries?.map((e:string,i)=>{
                                return <IconDisplay key={i} name={e}/>
                            })}
                        </div>
                        <LinksButton linkPage={projectSelected.url} linkRepo={projectSelected.repo}/>
                    </div>
                </div>
                <div className={styles.windowRight}>
                        {projectSelected.video?<video src={projectSelected.video}
                        autoPlay
                        loop
                        muted
                        playsInline>--{translateProject("loading")}--</video>:<p>--{translateProject("noPreview")}--</p>}
                </div>
            </div>
        )
        }
    </div>
}

export default WindowProject;
