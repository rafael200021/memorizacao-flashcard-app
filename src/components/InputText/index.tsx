import React from "react";

export default function InputText({
  tipo,
  valor,
  funcao,
  placeholder,
}: {
  tipo: string;
  valor: string;
  funcao: React.Dispatch<React.SetStateAction<any>>;
  placeholder?: string;
}) {
  return (
    <input
      type={tipo}
      value={valor}
      placeholder={placeholder}
      onChange={(e) => funcao(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}
