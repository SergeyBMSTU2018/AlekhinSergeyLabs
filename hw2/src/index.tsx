import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme, App } from './app'
import { SnackbarProvider } from 'notistack';

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <StrictMode>
      <Theme>
          <SnackbarProvider maxSnack={5}>
              <App/>
          </SnackbarProvider>
      </Theme>
  </StrictMode>,
)
