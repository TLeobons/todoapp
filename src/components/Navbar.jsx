import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'

import GithubLogo from 'assets/github.svg'

const Navbar = () => {

  const [menu, setMenu] = useState(['home', 'data', 'images', 'todos','contact', 'login'])

  return (
      <Nav>
      <Left>
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
        </Left>
        <div className="right">
        {/* <GithubLogo/> */}
        </div>
      </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 8vh;
  background-color: rebeccapurple;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`
const Left = styled.div`
  display: flex;
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