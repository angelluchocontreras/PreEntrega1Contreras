import { BrowserRouter, Route , Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Headerv2 from "./components/Headerv2"
import Mainv2 from "./components/Mainv2"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./Cart/Cart"






function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <Headerv2 />
    <Routes>
      <Route path="/" element = {<ItemListContainer />}/>
        <Route path="/category/:categoryId" element = {<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element = {<h1>404 NOT FOUND</h1>}/>
    </Routes>
    <Footer />
    </CartProvider>
  </BrowserRouter>
  );
  
}

export default App; 
