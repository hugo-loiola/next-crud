import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela'|'formulario'>('tabela')

  function clienteSelecionado(cliente: Cliente) {
  }

  function clienteExcluido(cliente: Cliente) {

  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)

  }

  const clientes = [
    new Cliente('Ana', 34,'1'),
    new Cliente('Hugo', 70,'2'),
    new Cliente('Ricardo', 24,'3'),
    new Cliente('Betinho', 18,'4'),
    new Cliente('Ana Luísa', 40,'5'),
  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-400 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? (      <>        
        <div className="flex justify-end mb-4">
        <Botao 
          className='mb-2' 
          onClick={() => setVisivel('formulario')}>
            Novo Cliente
        </Botao>
        </div>
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}></Tabela>
      </>) : (  
        <Formulario 
          cliente={clientes[0]}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />
      )}
      </Layout>
    </div>
  )
}
