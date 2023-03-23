import { RouteObject } from 'react-router-dom'
import { BasicLayout } from '@/shared/layouts/basic'
import { notFoundRouting } from '@/entities/not-found'
import { previewRouting } from '@/entities/preview'
import { chooseCharacterRouting } from '@/entities/choose-character'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [...previewRouting, ...notFoundRouting, ...chooseCharacterRouting]
  }
]
