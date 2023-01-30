import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

const Element: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Element />
    </HashRouter>
  )
}

export default App
