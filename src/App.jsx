
import { useState } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
// import {ThemeProvider} from 'styled-components'

import Home from "components/home"
import Data from "components/data"
import Images from "components/images"
import Todos from "components/todos"
import Contact from "components/contact"
import Login from "components/login"
import Weather from 'components/weather'
import NotFound from 'components/notFound'
import Blog from "components/blog"
import GlobalStyle from 'theme/global'
// import {lightTheme, darkTheme} from 'theme/global'
import Layout from 'components/layout'

const App = () => {

  const [theme, setTheme] = useState('light')

  // const toggleTheme = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
      
  return (
    <div className="App">
      {/* <ThemeProvider value={theme === 'light' ? lightTheme : darkTheme}> */}
        <GlobalStyle/>
        <Layout>
          <Switch>
            <Route path='/data' component={Data}/>
            <Route path='/images' component={Images}/>
            <Route path='/todos' component={Todos}/>
            <Route path='/weather' component={Weather}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/login' component={Login}/>
            <Route path='/404' component={NotFound}/>
            <Route path='/' exact component={Home}/>
            <Redirect to="/404" component={NotFound}/>
          </Switch>
        </Layout>
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App