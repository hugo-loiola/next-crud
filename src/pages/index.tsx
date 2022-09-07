import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  function clienteSelecionado(cliente: Cliente) {
  }

  function clienteExcluido(cliente: Cliente) {

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
        <Botao>Novo Cliente</Botao>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
