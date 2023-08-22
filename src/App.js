import { BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Headerv2 from "./components/Headerv2"
import ItemCount from "./components/ItemCount";
import Mainv2 from "./components/Mainv2"





function App() {
  return (
    <BrowserRouter>
    <Headerv2 />
    <Mainv2/>
    <Footer />
  </BrowserRouter>
  );
  
}

export default App; 
