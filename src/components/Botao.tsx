import React from 'react'
interface BotaoProps {
  children: any,
  className?: string
  onClick?: () => void
}

const Botao = (props : BotaoProps) => {
  return (
    <button onClick={props.onClick} className={`${props.className} text-center px-4 py-2 bg-green-400 rounded-md text-white`}>
      {props.children}
    </button>
  )
}

export default Botao