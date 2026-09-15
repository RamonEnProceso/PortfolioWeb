import IconDisplay from "../../shared/iconDisplay"

const LinkRepo = ({url}:{url:string|undefined}) => {
    return url? <a href={url} target="_blank" rel="noopener noreferrer">
        <IconDisplay name={"Github"}/>
    </a> : null;
}

const LinkPage = ({url}:{url:string|undefined}) => {
    return url? <a href={url} target="_blank" rel="noopener noreferrer">
        <IconDisplay name={"page"}/>
    </a> : null;
}

const LinksButton = ({linkRepo, linkPage}:{linkRepo:string|undefined, linkPage:string|undefined}) => {
    return <div>
    <LinkRepo url={linkRepo}/>
    <LinkPage url={linkPage}/>
    </div>
}

export default LinksButton;