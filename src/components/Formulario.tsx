import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar, editar } from '../store/contatosSlice'
import type { AppDispatch } from '../store'
import { Form, Input, Button, ButtonDanger } from '../styles/styled'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type Props = {
  contatoParaEditar: Contato | null
  cancelarEdicao: () => void
}

function Formulario({ contatoParaEditar, cancelarEdicao }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (contatoParaEditar) {
      setNome(contatoParaEditar.nome)
      setEmail(contatoParaEditar.email)
      setTelefone(contatoParaEditar.telefone)
    } else {
      setNome('')
      setEmail('')
      setTelefone('')
    }
  }, [contatoParaEditar])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !email || !telefone) return

    if (contatoParaEditar) {
      dispatch(
        editar({
          id: contatoParaEditar.id,
          nome,
          email,
          telefone
        })
      )
      cancelarEdicao()
    } else {
      dispatch(
        adicionar({
          id: Date.now(),
          nome,
          email,
          telefone
        })
      )

      // 🔥 limpa depois de adicionar
      setNome('')
      setEmail('')
      setTelefone('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <Button type="submit">
        {contatoParaEditar ? 'Salvar' : 'Adicionar'}
      </Button>

      {contatoParaEditar && (
        <ButtonDanger type="button" onClick={cancelarEdicao}>
          Cancelar
        </ButtonDanger>
      )}
    </Form>
  )
}

export default Formulario
