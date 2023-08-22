import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <nav className="py-2 flex items-center justify-between">
      <div className="ml-4">
        <Link to= "/" className="text-3xl font-bold">Caralimba</Link>
      </div>
      <div className="flex justify-center">
  
        <Link className="text-white hover:text-gray-300 mr-10" to="/cat/1">
          Remeras
        </Link>
        <Link className="text-white hover:text-gray-300 mr-10" to="/cat/2">
          Pantalones
        </Link>
        <Link className="text-white hover:text-gray-300" to="/cat/3">
        Buzo
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
