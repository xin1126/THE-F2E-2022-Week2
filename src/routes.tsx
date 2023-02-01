import type { RouteObject } from 'react-router-dom'
import Home from './pages/home/index'
import Archive from './pages/archive/index'
import Trash from './pages/trash/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
  {
    path: '/trash',
    element: <Trash />,
  },
]

export default routes
