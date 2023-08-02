import CartWidget from "./CartWidget"

function NavBar (){
    return (
       <>
        <div className="block">
        <h1 className="mt-10 ml-10 mb-10 mr-5 ">Caralimba</h1>
        
      </div>
      <nav className="container flex justify-beetwen items-center">
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Tienda</a>
        
      </nav>
      <CartWidget />    
       </>
     )
}

export default NavBar