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
