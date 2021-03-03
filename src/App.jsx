import Footer from 'components/footer'
import Home from 'components/home'
import Navbar from 'components/navbar'
import GlobalStyle from 'theme/global'

const App = () => {
      
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App