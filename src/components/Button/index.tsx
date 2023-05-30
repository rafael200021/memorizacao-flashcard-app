import React from "react";

export default function Button({
  text,
  color,
  onClick,
}: {
  text: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded w-52 font-semibold shadow-lg p-3 transition-all  ${color}`}
    >
      {text}
    </button>
  );
}
