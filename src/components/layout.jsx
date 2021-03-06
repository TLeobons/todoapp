import styled from 'styled-components'
import Footer from 'components/footer'
import Navbar from 'components/navbar'

const Layout = ({children}) => {
  return (
    <Body>
     <Navbar/>
      <Main>
        {children}
      </Main>
     <Footer/>
    </Body>
  )
}

export default Layout

const Body = styled.section`
` 

const Main = styled.main`
  height: 98vh;
  background: ${props => props.theme.background};
  padding-top: 86px;
`
