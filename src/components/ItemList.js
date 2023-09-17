import React from "react";
import Item from "./Item";



function ItemList({products}) {

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  );
}

export default ItemList;
