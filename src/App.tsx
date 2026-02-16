import { useState } from 'react'
import Formulario from './components/Formulario'
import ListaContatos from './components/ListaContatos'
import { Container, Title, GlobalStyle } from './styles/styled'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

function App() {
  const [contatoParaEditar, setContatoParaEditar] =
    useState<Contato | null>(null)

  return (
    <>
      <GlobalStyle />

      <Container>
        <Title>Lista de Contatos</Title>

        <Formulario
          contatoParaEditar={contatoParaEditar}
          cancelarEdicao={() => setContatoParaEditar(null)}
        />

        <ListaContatos
          setContatoParaEditar={setContatoParaEditar}
          contatoParaEditar={contatoParaEditar}
        />
      </Container>
    </>
  )
}

export default App
