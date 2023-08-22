import React, { useState } from "react";

function ItemCount() {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="text-center my-40">
      <div className="flex items-center justify-center space-x-4 ">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={decrementar}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={incrementar}
        >
          +
        </button>
      </div>
      <p>Cantidad seleccionada: {cantidad}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        Confirmar Compra
      </button>
    </div>
  );
}

export default ItemCount;
