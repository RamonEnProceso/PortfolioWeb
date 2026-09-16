import type { PageData } from "../../models/PageData"
import TranslateButton from "./translateButton"
import { translateMenu } from "./translateMenu"

const Menu = ({data}:{data:PageData}) => {
    return (
        <nav>
            <div>
            <a href="#home">{translateMenu(data.lan,"Home")}</a>
            <a href="#about">{translateMenu(data.lan,"About")}</a>
            <a href="#projects">{translateMenu(data.lan,"Projects")}</a>
            <a href="#contact">{translateMenu(data.lan,"Contact")}</a>
            </div>
            <div>
                <TranslateButton lan={data.lan} setLan={data.setLan}></TranslateButton>
            </div>
        </nav>
    )
}

export default Menu