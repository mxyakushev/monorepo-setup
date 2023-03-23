import { RouteObject } from 'react-router-dom'
import { ChooseCharacter } from '../page'

export const chooseCharacterRouting: RouteObject[] = [
  {
    path: 'choose-character',
    children: [
      {
        index: true,
        element: <ChooseCharacter />
      }
    ]
  }
]
