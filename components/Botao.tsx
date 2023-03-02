interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      className={`
        bg-[#4681f4] 
        text-white rounded-md px-2 py-1
        ${props.className}
        `}
    >
      {props.children}
    </button>
  );
}
