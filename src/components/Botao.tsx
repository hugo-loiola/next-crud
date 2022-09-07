import React from 'react'
interface BotaoProps {
  children: any,
  cor?: 'blue'| 'green'| 'yellow'
}

const Botao = (props : BotaoProps) => {
  return (
    <button >
      {props.children}
    </button>
  )
}

export default Botao