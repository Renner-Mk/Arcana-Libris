import { Container } from '../Header/styles'
import { ThemaChanger } from '../ThemaChanger'

import { Buttom, FormSearch, Input, List } from './style'

import { BsSearch } from 'react-icons/bs'

export function Nav() {
  return (
    <Container>
      <List>
        <li>Home</li>
      </List>
      <FormSearch>
        <Input type="text" placeholder="Que livro procuras?" />
        <Buttom>
          <BsSearch className="icon" />
        </Buttom>
      </FormSearch>
      <ThemaChanger />
    </Container>
  )
}
