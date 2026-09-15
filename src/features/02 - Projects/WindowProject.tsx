import type { Project } from "../../models/Project";
import IconDisplay from "../../shared/iconDisplay";
import LinksButton from "./linksButton";

const WindowProject = ({data}:{data:Project|null}) => {
    return <div style={{display: data?"block":"none"}}>
        {data && (
            <div>
                <h2>{data.name}</h2>
                <div>
                    {data.stack.map((e:string)=>{
                        return <IconDisplay name={e}/>
                    })}
                </div>
                <div>
                    {data.libraries?.map((e:string)=>{
                        return <IconDisplay name={e}/>
                    })}
                </div>
                <LinksButton linkPage={data.url} linkRepo={data.repo}/>
            </div>
        )
        }
    </div>
}

export default WindowProject;