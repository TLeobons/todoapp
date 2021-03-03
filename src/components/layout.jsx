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

const Body = styled.body`
  min-height: 100vh;
`

const Main = styled.main`
  position: absolute;
  top: 70px;
  min-height: 92vh;
`
