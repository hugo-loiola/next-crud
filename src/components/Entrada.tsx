import React from 'react'
interface EntradaProps{
  texto: string
  tipo?: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className='mb-2'>
        {props.texto}
      </label>
      <input 
        type={props.tipo ?? 'text'} 
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        readOnly={props.somenteLeitura}
        className={`
        border border-purple-500 rounded-md bg-gray-50 px-4 py-2 
        focus:outline-none
        ${props.somenteLeitura ? '' : 'focus:bg-white'}`}
      />
    </div>
  )
}

export default Entrada