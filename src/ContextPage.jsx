import React, { useContext } from "react";
import AppContext from "./AppContext";
const {
    LangContext,
    LangProvider,
    ThemeContext,
    ThemeProvider
} = AppContext
const Menu = () => {
    const langProps = useContext(LangContext)
    const themeProps = useContext(ThemeContext)
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>
                    Language
                    <select value={langProps.lang} onChange={langProps.changeLang}>
                        <option value="🇬🇧"> 🇬🇧  English</option>
                        <option value="🇮🇩">  🇮🇩 Bahasa Indonesia</option>
                    </select>
                </li>
                <li>
                    Theme
                    <select value={themeProps.theme} onChange={themeProps.changeTheme}>
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}
const Header = () => {
    return (
        <React.Fragment>
            <li>--- Header ---</li>
            <Menu />
        </React.Fragment>
    )
}
const Content = () => {
    console.log("content render");
    return (
        <React.Fragment>
            <li>--- Content ---</li>
            <h3> 🤙 Hello Content Component </h3>
        </React.Fragment>
    )
}
const Footer = () => {
    console.log("render footer");
    const langProps = useContext(LangContext)
    const thepeProps = useContext(ThemeContext)
    return (
        <React.Fragment>
            <li>--- Footer ---</li>
            <p>Language : {langProps.lang}</p>
            <p>Theme :{thepeProps.theme}</p>
        </React.Fragment>
    )
}
const LangPage = () => {
    return (
        <LangProvider>
            <ThemeProvider>
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
        </LangProvider>
    )
}
export default LangPage