import styles from "./Background.module.css"

const Background = () => {
    return <div className={styles.container}>
            <img className={styles.BackgroundLeft} src="background/BackgroundLeft.webp"/>
            <img className={styles.BackgroundRight} src="background/BackgroundRight.webp"/>
        </div>
}

export default Background