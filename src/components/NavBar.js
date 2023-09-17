import React from "react";
import CartWidget from "./CartWidget";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="py-2 flex items-center justify-between">
      <div className="ml-4">
        <Link to="/" className="text-3xl font-bold">
          Caralimba
        </Link>
      </div>
      <div className="flex justify-center">
      <Link
  to={`/category/Remeras`}
  className={isActiveLink("/category/Remeras") ? "ActiveOption" : "Opcion"}
>
  Remeras
</Link>
<Link
  to={`/category/Pantalones`}
  className={isActiveLink("/category/Pantalones") ? "ActiveOption" : "Opcion"}
>
  Pantalones
</Link>
<Link
  to={`/category/Buzo`}
  className={isActiveLink("/category/Buzo") ? "ActiveOption" : "Opcion"}
>
  Buzo
</Link>

      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
