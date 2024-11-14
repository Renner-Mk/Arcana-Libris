import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Thema } from './styles'
import { GiMoonOrbit, GiSun } from 'react-icons/gi'

export function ThemaChanger() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('Home deve ser usado dentro de um ThemeContextProvider.')
  }

  const { toggleTheme, isDarkTheme } = themeContext

  return (
    <>
      <Thema className={isDarkTheme ? 'right' : 'left'} onClick={toggleTheme}>
        <span>
          <GiSun className="i2" />
          <GiMoonOrbit className="i" />
        </span>
      </Thema>
    </>
  )
}
