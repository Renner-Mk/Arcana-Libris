import { createContext, ReactNode, useEffect, useState } from 'react'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import { ThemeProvider } from 'styled-components'

interface IThemeContext {
  toggleTheme: () => void
  isDarkTheme: boolean
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storegeTheme = localStorage.getItem('theme')

    return storegeTheme ? JSON.parse(storegeTheme) : false
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  const toggleTheme = () => setIsDarkTheme((prevTheme: boolean) => !prevTheme)

  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
