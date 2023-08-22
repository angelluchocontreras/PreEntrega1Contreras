import React, { useState, useEffect } from "react";
import { getProducts } from "./asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    getProducts()
      .then(response => {
        if (nombreCategoria) {
          const productsInCategory = response.filter(product => product.categoria === nombreCategoria);
          setProducts(productsInCategory);
        } else {
          setProducts(response);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [nombreCategoria]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
