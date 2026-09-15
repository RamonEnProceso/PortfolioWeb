import styles from "./linksButton.module.css"

const LinkRepo = ({url}:{url:string|undefined}) => {
    return url? <a href={url} target="_blank" rel="noopener noreferrer" title="Entrar a Repositorio">
        <img src="/icons/github.webp" height="50px" alt ="Github icon"/>
    </a> : null;
}

const LinkPage = ({url}:{url:string|undefined}) => {
    return url? <a href={url} target="_blank" rel="noopener noreferrer" title="Entrar a Página">
        <img src="/icons/page.webp" height="50px" alt="Mozilla icon"/>
    </a> : null;
}

const LinksButton = ({linkRepo, linkPage}:{linkRepo:string|undefined, linkPage:string|undefined}) => {
    return <div className={styles.links}>
    <LinkRepo url={linkRepo}/>
    <LinkPage url={linkPage}/>
    </div>
}

export default LinksButton;