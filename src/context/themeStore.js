import { createContext, useState } from "react"
// import light from 'theme'

const ThemeContext = createContext()

const ThemeStore = ({children}) => {

  // const [theme, settheme] = useState()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = theme => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )

}

export {ThemeContext, ThemeStore}