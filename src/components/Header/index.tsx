import { Nav } from '../Nav'
import { Container, Imag, LogoName, NameLibrary, Subtitulo } from './styles'

export function Header() {
  return (
    <>
      <Container>
        <LogoName>
          <Imag />
          <div>
            <NameLibrary>Arcana Libris</NameLibrary>
            <Subtitulo>Conhecimento do Poder</Subtitulo>
          </div>
        </LogoName>
        <Nav />
      </Container>
    </>
  )
}
