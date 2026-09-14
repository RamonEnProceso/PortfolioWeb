import type { ProgrammingAssets } from "../models/ProgrammingAssets";

const iconDisplay = (data : ProgrammingAssets) => {
    return <img src={data.icon} alt={`${data.name} icon`} title={`${data.name}`}></img>
}

export default iconDisplay