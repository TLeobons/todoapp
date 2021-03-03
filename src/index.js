import ReactDOM from 'react-dom'
import App from './App'
import { GlobalProvider } from './context/globalContext'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Router>,
  document.getElementById('root')
)