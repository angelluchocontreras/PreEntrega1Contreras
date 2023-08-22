import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
function Main(){
    return(
        <main>
            <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/cat/:id" element={<ItemListContainer/>}/> 
            </Routes>
        </main>
    )
}

export default Main