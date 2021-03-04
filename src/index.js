import ReactDOM from 'react-dom'

import App from 'App'
import { GlobalProvider } from 'context/globalContext'
import {ThemeStore} from 'context/themeStore'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ThemeStore>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeStore>
  </Router>,
  document.getElementById('root')
)