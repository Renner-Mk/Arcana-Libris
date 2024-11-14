import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { GlobalStyles } from './styles/global.ts'

import { ThemeContextProvider } from './contexts/ThemeContext.tsx'

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}
