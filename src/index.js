import ReactDOM from 'react-dom'

import App from 'App'
import { TodoStore } from 'context/todoStore'
import {ThemeStore} from 'context/themeStore'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ThemeStore>
      <TodoStore>
        <App />
      </TodoStore>
    </ThemeStore>
  </Router>,
  document.getElementById('root')
)