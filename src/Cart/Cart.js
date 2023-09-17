import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
    const { clearCart, totalQuantity, total } = useContext(CartContext);
  
    if (totalQuantity === 0) {
      return (
        <div className="text-center">
          <h1 className="text-2xl font-semibold my-4">No hay productos en el carrito</h1>
          <Link to="/" className="text-blue-500 hover:underline">Volver a Productos</Link>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto mt-4 p-4">
        <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>
       
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Total: ${total}</h3>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => clearCart()}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Limpiar Carrito
            </button>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;
  