import { createRoot } from 'react-dom/client'

import { AllProviders } from '@/app/all-providers'
import { Application } from './app'
import { StrictMode } from 'react'
import './styles/global.css'

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

root.render(
  <StrictMode>
    <AllProviders>
      <Application />
    </AllProviders>
  </StrictMode>
)
