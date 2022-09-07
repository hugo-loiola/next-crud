import React from 'react'
import Cliente from '../core/Cliente'

interface TabelaProps{
  clientes: Cliente[]
}

const Tabela = (props: TabelaProps) => {

  function rederCab(){
    return (
     <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function rederDados(){
    return props.clientes?.map((cliente,i) => {
      return (
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.idade}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>{rederCab()}</thead>
      <tbody>{rederDados()}</tbody>
    </table>
  )
}

export default Tabela