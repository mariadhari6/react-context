import React, { createContext, useState } from "react";
const AppContext = () => {
    const LangContext = createContext()
    const ThemeContext = createContext()
    const LangProvider = (props) => {
        const [lang, setLang] = useState('🇬🇧')
        const changeLang = (e) => setLang(e.target.value)
        const langState = { lang, changeLang }
        return (
            <LangContext.Provider value={langState}>
                {props.children}
            </LangContext.Provider>
        )
    }
    const ThemeProvider = (props) => {
        const [theme, setTheme] = useState('Light')
        const changeTheme = (e) => setTheme(e.target.value)
        const themeState = { theme, changeTheme }
        return (
            <ThemeContext.Provider value={themeState}>
                {props.children}
            </ThemeContext.Provider>
        )
    }
    return {
        LangContext,
        LangProvider,
        ThemeContext,
        ThemeProvider
    }
}
export default AppContext()