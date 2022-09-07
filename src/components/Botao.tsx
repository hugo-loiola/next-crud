import React from 'react'
interface BotaoProps {
  children: any,
  cor?: 'blue'| 'green'| 'yellow'
}

const Botao = (props : BotaoProps) => {
  return (
    <button className='text-center px-4 py-2 bg-green-400 rounded-md text-white'>
      {props.children}
    </button>
  )
}

export default Botao