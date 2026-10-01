import TranslateButton from "./translateButton"
import { useTranslateMenu } from "./translateMenu"
import styles from "./portfolioNav.module.css"

const Menu = () => {
    const translateMenu = useTranslateMenu();
    return (
        <nav className={styles.menu}>
            <div className={styles.index}>
            <a href="#home">{translateMenu("Home")}</a>
            <a href="#about">{translateMenu("About")}</a>
            <a href="#projects">{translateMenu("Projects")}</a>
            <a href="#contact">{translateMenu("Contact")}</a>
            </div>
            <div className={styles.buttons}>
                <TranslateButton/>
            </div>
        </nav>
    )
}

export default Menu
