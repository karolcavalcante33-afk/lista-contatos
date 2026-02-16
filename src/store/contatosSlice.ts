import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type EstadoContatos = {
  itens: Contato[]
}

const initialState: EstadoContatos = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.itens.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(c => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(c => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
