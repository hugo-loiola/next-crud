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
  const [client, setClient] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela'|'formulario'>('tabela')

  useEffect(() =>{
  },[])

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function obterTodos(){
    repo.obterTodos().then(client => {
      setCliente(client)
      setVisivel('tabela')
    })
  }

  function clienteExcluido(cliente: Cliente) {

  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(client)
    obterTodos()
  }

  function novoCliente() {
    setCliente(cliente)
    setVisivel('formulario')
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
