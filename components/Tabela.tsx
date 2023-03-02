import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-2">Código </th>
        <th className="text-left p-2">Nome </th>
        <th className="text-left p-2">Idade </th>
        {exibirAcoes ? <th className=" p-2">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-gray-200" : "bg--100"}`}
        >
          <td className="text-left p-2">{cliente.id}</td>
          <td className="text-left p-2">{cliente.nome}</td>
          <td className="text-left p-2">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`flex justify-center items-center
        text-green-600 rounded-2xl p-2 m-1
        hover:bg-purple-50`}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`flex justify-center items-center
        text-red-600 rounded-2xl p-2 m-1
        hover:text-black`}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className={`w-full rounded overflow-hidden`}>
      <thead
        className={`
      text-gray-200
      bg-gradient-to-r from-indigo-700 to-indigo-900
      `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
