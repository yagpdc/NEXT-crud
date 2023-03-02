import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 25, "2"),
    new Cliente("Carlos", 56, "3"),
    new Cliente("Pedro", 21, "4"),
  ];

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluindo o cliente ${cliente.nome}`);
  }

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div>
      <div
        className={`flex justify-center items-center h-screen
        bg-[#2a303c] text-white
        `}
      >
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao className="mb-4 ">Novo Cliente</Botao>
          </div>
          <Tabela
            clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          ></Tabela>
        </Layout>
      </div>
    </div>
  );
}
