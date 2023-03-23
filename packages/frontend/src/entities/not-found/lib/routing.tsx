import { NotFound } from '../page'
import { RouteObject } from 'react-router-dom'

export const notFoundRouting: RouteObject[] = [
  {
    path: '404',
    element: <NotFound />
  },
  { path: '*', element: <NotFound /> }
]
