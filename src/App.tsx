import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

const Element: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <main className="h-[calc(100vh_-_91px)] bg-[#333333]">
        <Element />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
