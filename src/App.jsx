import NavBar from "./componentes/NarBar/NavBar";
import Compra from "./componentes/Compra/Compra";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            path='/categoria/:idCategoria'
            element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/Compra' element={<Compra />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
