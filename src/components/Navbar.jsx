import { useState } from "react"
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Redirect } from "react-router-dom"
import styled from 'styled-components'

import Home from "./home"
import Data from "./data"
import Images from "./images"
import Todos from "./todos"
import Contact from "./contact"
import Login from "./login"
import Weather from './weather'
import NotFound from './notFound'
import Blog from "./blog"

const Navbar = () => {

  const [menu, setMenu] = useState(['home', 'data', 'images', 'todos','contact', 'login'])

  return (
    <Router>
      <Nav>
        <ul>
          <MenuItem>
            <StyledLink to="/">
              home
            </StyledLink>
          </MenuItem>
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
          <MenuItem><StyledNavLink to="/weather">weather</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/blog">blog</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/contact">contact</StyledNavLink></MenuItem>
        </ul>
        <ul>
          <MenuItem><StyledNavLink to="/login">login</StyledNavLink></MenuItem>
        </ul>     
      </Nav>
      <Switch>
        <Route path='/data' component={Data}/>
        <Route path='/images' component={Images}/>
        <Route path='/todos' component={Todos}/>
        <Route path='/weather' component={Weather}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/login' component={Login}/>
        <Route path='/404' component={NotFound}/>
        <Route path='/' exact component={Home}/>
        <Redirect to="/404" component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 8vh;
  background-color: rebeccapurple;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`
const MenuItem = styled.li`
  padding: 0.75em;
`
const StyledLink = styled(Link)`
  color: white;
`
const StyledNavLink = styled(NavLink)`
  color: pink;
  &.active {
    color: yellow;
  }
`