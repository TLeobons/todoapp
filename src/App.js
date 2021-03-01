import Form from 'components/common/form'
import Toggler from 'components/common/mode-toggler'
import Navbar from 'components/Navbar'
import './App.css'

const App = () => {
      
  return (
    <div className="App">
      <Navbar/>
	<div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
		<Form/>
		<Toggler />
	</div>
    </div>
  )
}

export default App;