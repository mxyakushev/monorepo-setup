import { routes } from './app.routing'
import { useRoutes } from 'react-router-dom'

export const Application = () => {
  const appRouting = useRoutes(routes)
  return <>{appRouting}</>
}
