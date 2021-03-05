import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeStore = ({children}) => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = theme => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )

}

export {ThemeContext, ThemeStore}