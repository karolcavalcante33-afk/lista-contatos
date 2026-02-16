import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { remover } from '../store/contatosSlice'
import { 
  List, 
  ListItem, 
  Button, 
  ButtonDanger,
  Info, 
  Name,
  Email,
  Phone,
  Actions 
} from '../styles/styled'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type Props = {
  setContatoParaEditar: (contato: Contato) => void
  contatoParaEditar: Contato | null
}

function ListaContatos({ 
  setContatoParaEditar,
  contatoParaEditar
}: Props) {

  const contatos = useSelector((state: RootState) => state.contatos.itens)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <List>
      {contatos.map((contato) => {
        const isEditing = contatoParaEditar?.id === contato.id

        return (
          <ListItem 
            key={contato.id}
            $isEditing={isEditing}
          >
            <Info>
              <Name>{contato.nome}</Name>
              <Email>{contato.email}</Email>
              <Phone>{contato.telefone}</Phone>
            </Info>

            <Actions>
              {/* Esconde botão editar se já estiver editando */}
              {!isEditing && (
                <Button onClick={() => setContatoParaEditar(contato)}>
                  Editar
                </Button>
              )}

              <ButtonDanger onClick={() => dispatch(remover(contato.id))}>
                Remover
              </ButtonDanger>
            </Actions>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListaContatos
