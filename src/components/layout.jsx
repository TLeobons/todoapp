import styled from 'styled-components'
import Footer from 'components/footer'
import Navbar from 'components/navbar'

const Layout = ({children}) => {
  return (
    <>
     <Navbar/>
      <Main>
        {children}
      </Main>
     <Footer/> 
    </>
  )
}

export default Layout

const Main = styled.main`
  height: 100vh;
`
