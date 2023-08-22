import React from "react";

function Item({ id, nombre, img, precio, stock }) {
  return (
    <article className="CardItem bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
      <picture className="mb-2">
        <img src={img} alt={nombre} className="ItemImg w-48 h-48 object-contain" />
      </picture>
      <h2 className="text-lg font-semibold text-center mb-5">{nombre}</h2>
      <section className="mb-2 text-center">
        <p className="text-gray-700">
          Precio: <span className="font-semibold">${precio}</span>
        </p>
        <p className="text-gray-700">
          Stock disponible:{" "}
          <span className={stock <= 5 ? "text-red-500 font-semibold" : "font-semibold"}>
            {stock}
          </span>
        </p>
      </section>
      <button className="Opcion bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
        Ver Detalles
      </button>
    </article>
  );
}

export default Item;
