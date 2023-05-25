import { useState } from "react";

export interface ItemProps {
  itemName: string;
  quantity: number | string;
  removeItem?: () => void;
}

export function ItemList({ itemName, quantity, removeItem }: ItemProps) {
  const [isBought, setIsBought] = useState<boolean>();

  const handleMarkText = () => {
    setIsBought(!isBought);
  };

  return (
    <li>
      <span
        className={`font-semibold text-white ${
          isBought && "line-through text-gray-500 italic"
        }`}
      >
        {itemName} - {quantity}{" "}
      </span>
      <button
        onClick={handleMarkText}
        className={`font-bold text-green-500 px-4 `}
      >
        {isBought ? "Desmarcar" : "Marcar como comprado"}
      </button>
      <button onClick={removeItem} className="font-bold text-red-500">
        Remover
      </button>
    </li>
  );
}
