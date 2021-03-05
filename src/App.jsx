import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from 'components/home'
import Data from 'components/data'
import ImagesPage from 'components/images'
import Todos from 'components/todos'
import Contact from 'components/contact'
import Weather from 'components/weather'
import NotFound from 'components/notFound'
import Blog from 'components/blog'
import GlobalStyle from 'theme/global'
import { lightTheme, darkTheme } from 'theme'
import Layout from 'components/layout'
import {menuItems} from 'config/layout'
import Login from 'components/login'
import {ThemeContext} from 'context/themeStore'

const App = () => {

  const mapping = {
    data: Data,
    images: ImagesPage,
    todo: Todos,
    weather: Weather,
    blog: Blog,
    contact: Contact,
    login: Login
  }

  const {theme} = useContext(ThemeContext)

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout>
          <Switch>
            {menuItems.map((item, i) => (
              <Route key={i} path={`/${item.path}`} component={mapping[item.item]} />

            ))}
            <Route path="/404" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/404" component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
  )
}

export default App
