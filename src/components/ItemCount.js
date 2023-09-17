import React, { useState } from "react";

function ItemCount({ stock }) {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-4">
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
          disabled={cantidad === stock} 
        >
          +
        </button>
      </div>
      
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ml-52 mt-5">
        Confirmar Compra
      </button>
    </div>
  );
}

export default ItemCount;
