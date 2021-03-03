import { useState } from "react"
import styled from 'styled-components'
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from "react-router-dom"
import Home from "./home"
import Data from "./data"
import Images from "./images"
import Todos from "./todos"
import Contact from "./contact"
import Login from "./login"

const Navbar = () => {

  const [menu, setMenu] = useState(['home', 'data', 'images', 'todos','contact', 'login'])

  return (
    <Router>
      <Nav>
        <ul>
          <MenuItem><StyledLink to="/">home</StyledLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/data">data</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/images">images</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/todos">todos</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/contact">contact</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/login">login</StyledNavLink></MenuItem>
        </ul>     
      </Nav>
      <Switch>
        <Route path='/data'>
          <Data/>
        </Route>
        <Route path='/images'>
          <Images/>
        </Route>
        <Route path='/todos'>
          <Todos/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 5vh;
  background-color: purple;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`
const MenuItem = styled.li`
  padding: 0.75em;
`
const StyledLink = styled.Li