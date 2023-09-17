import React, { useState, useEffect } from "react";
import { getProducts, getProductsById } from "./asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsById : getProducts
    asyncFunc (categoryId)
    .then(response =>{
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })

  }, [categoryId]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
