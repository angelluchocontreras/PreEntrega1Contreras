
import React, { useState, useContext } from "react"; 
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext"; 

function ItemDetail({ product }) {
    const { id, nombre, img, precio, stock, categoria, descripcion } = product;
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext); 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
            id, nombre, precio
        };
        addItem(item, quantity); 
    };

    return (
        <article className="bg-white p-4 rounded-lg shadow-md flex">
         
            <div className="w-1/2">
                <picture className="mb-10">
                    <img src={img} alt={nombre} className="w-96 h-96 object-cover" />
                </picture>
            </div>
            <div className="w-1/3 p-4">
                <h2 className="text-xl font-semibold mb-4">{nombre}</h2>
                <section className="mb-4 text-center">
                    <p className="text-gray-700">
                        Categoría: <span className="font-semibold">{categoria}</span>
                    </p>
                    <p className="text-gray-700">
                        Descripción: {descripcion}
                    </p>
                    <p className="text-gray-700">
                        Precio: <span className="font-semibold">${precio}</span>
                    </p>
                    <p className={`text-gray-700 ${stock <= 5 ? 'text-red-500 font-semibold' : 'font-semibold'}`}>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    {quantityAdded > 0 ? (
                        <Link to="/cart">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </footer>
            </div>
       
        </article>
    );
}

export default ItemDetail;
