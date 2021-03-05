import {useContext, useRef} from 'react'
import styled from 'styled-components'

import { ThemeContext } from "context/themeStore";

const ThemeToggle = () => {

  const {toggleTheme} = useContext(ThemeContext)
  const toggleRef = useRef(null)

  const handleToggle = e => {
    localStorage.setItem('dark-mode-toggle', toggleRef.current.checked)
    if (e.target.checked) toggleTheme('dark')
    else toggleTheme('light')
  }

  return (
    <label>
    <Toggle
        checked={JSON.parse(localStorage.getItem('dark-mode-toggle'))}
        ref={toggleRef}
        type='checkbox' 
        onChange={handleToggle}
      />
      <span></span>
    </label>
  )
}

export default ThemeToggle

const Toggle = styled.input`
  font-size: 2em;
  cursor: pointer;
  width: 1.5rem;
  /* visibility: hidden;   */
`