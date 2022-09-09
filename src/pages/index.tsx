import { report } from "process";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

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
