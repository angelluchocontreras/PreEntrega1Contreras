const products = [
   {id: '1', name:'Ropa 02', precio:'5000', categoria: 'pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 6 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '2', name:'Ropa 02', precio:'5000', categoria: 'pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 6 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '3', name:'Ropa 04', precio:'10.000', categoria: 'Buzo', img:'https://static.dafiti.com.ar/p/polo-label-2741-8764221-1-product.jpg', stock: 20 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '4', name:'Ropa 02', precio:'5000', categoria: 'remera', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 6 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '5', name:'Ropa 02', precio:'5000', categoria: 'pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 1,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '6', name:'Ropa 02', precio:'5000', categoria: 'pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 2 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   {id: '7', name:'Ropa 02', precio:'5000', categoria: 'pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 8 ,
   descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   
]
   export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },500
        )
    })
   }



export const getProductsById = (productId) => {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.categoria === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
  
  