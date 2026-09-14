import type { ProgrammingAssets } from "../models/ProgrammingAssets";
import programmingAssets  from "../assets/JSONs/programmingAssets.json";

type ProgrammingAssetName = keyof typeof programmingAssets;

const searchByName = (name:string): ProgrammingAssets => {
    if (name in programmingAssets){
        return programmingAssets[name as ProgrammingAssetName];
    }
    return programmingAssets["none"];
}

const IconDisplay = ({name}:{name : string}) => {
    const data = searchByName(name);
    return <img height="35px" src={data.icon} alt={`${data.name} icon`} title={`${data.name}`}></img>
}

export default IconDisplay;