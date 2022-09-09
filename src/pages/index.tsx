import { report } from "process";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import Head from 'next/head'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente() 

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela'|'formulario'>('tabela')

  useEffect(obterTodos,[])

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-400 to-purple-500
    text-white overflow-hidden
    `}>
      <Head>
        <title>CRUD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="data:image/png;base64,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"></link>
      </Head>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? (      <>        
        <div className="flex justify-end mb-4">
        <Botao 
          className='mb-2' 
          onClick={novoCliente}>
            Novo Cliente
        </Botao>
        </div>
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido}></Tabela>
      </>) : (  
        <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />
      )}
      </Layout>
    </div>
  )
}
