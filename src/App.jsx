import Form from 'components/common/form'
import Navbar from 'components/Navbar'
import GlobalStyle from 'theme/global'


const App = () => {
      
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default App