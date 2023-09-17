import React, { useEffect, useState } from 'react';
import { getProductsById } from './asyncMock'; 
import ItemDetail from './ItemDetaild'; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); // Corrige la desestructuración aquí

    useEffect(() => {
        getProductsById(itemId) // Utiliza la variable itemId aquí
            .then(response => {
                setProduct(response); 
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {product ? (
                <ItemDetail product={product} /> 
            ) : (
                <p>Cargando producto...</p> 
            )}
        </div>
    );
};

export default ItemDetailContainer;
