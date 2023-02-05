import type { RouteObject } from 'react-router-dom'
import Home from './pages/home/index'
import Archive from './pages/archive/index'
import Trash from './pages/trash/index'
import Upload from './pages/upload/index'
import Sign from './pages/sign/index'

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
  {
    path: '/upload',
    element: <Upload />,
  },
  {
    path: '/sign',
    element: <Sign />,
  },
]

export default routes
