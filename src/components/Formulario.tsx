import React, { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'
import Entrada from './Entrada'
interface FormularioProps{
  cliente: Cliente
  children?: any
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void

}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id 
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)



  return (
    <div>
      {id ? (
        <Entrada 
          somenteLeitura
          texto='Código' 
          valor={id}
          className='mb-4'
        />
      ): false}

      <Entrada 
        texto='Nome' 
        valor={nome}
        valorMudou={setNome}
        className='mb-4'
      />
      <Entrada 
        texto='Idade' 
        tipo='number' 
        valor={idade}
        valorMudou={setIdade}
        className='mb-4'
      />
      <div className='flex justify-end mb-3'>
        <Botao onClick={() => props.clienteMudou?.(new Cliente(nome,idade,id))} className='mr-2'>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao className='mr-2' onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}

export default Formulario