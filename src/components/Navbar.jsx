import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'

import GithubLogo from 'assets/github.svg'
import {menuItems} from 'config/layout'
import ThemeToggle from "components/themeToggle"

const Navbar = () => {

  return (
      <Nav>
        <Left>
            <MenuItem><StyledLink to="/">home</StyledLink></MenuItem>
            {menuItems.map((item, i) => (
              <MenuItem key={i}>
                <StyledNavLink to= { `/${item.path}`}>{item.item}</StyledNavLink>
              </MenuItem>
            ))}
        </Left>

        <ThemeToggle/>

        <div className="right">
          <a href='https://www.github.com/TLeobons'>
            <img src={GithubLogo} alt='' height="40px" style={{paddingRight: '30px'}}/>
          </a>
        </div>
      </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 8vh;
  background-color: ${props => props.theme.navbarBackground};
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`
const Left = styled.ul`
  display: flex;
`
const MenuItem = styled.li`
  padding: 0.75em;
`
const StyledLink = styled(Link)`
  /* color: white; */
`
const StyledNavLink = styled(NavLink)`
  color: pink;
  &.active {
    color: yellow;
  }
`