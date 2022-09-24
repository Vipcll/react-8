import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//import Visto en clase
import ItemDetailContainer from './contenedores/ItemDetailContainer';
import ItemListContainer from './contenedores/ItemListContainer';

//Lazy se crea cuando se necesita 
const OtherComponent = React.lazy(() => import('./componentes/navbar'));




function App() {
  return (
    <BrowserRouter>
      <OtherComponent/>
      <Routes>
        <Route path="" element={<ItemListContainer/>}/>
        <Route path='item'><Route path=":id" element={<ItemDetailContainer/>}/></Route>
        <Route path='category'><Route path=":id" element={<ItemListContainer/>}/></Route>
      </Routes> 
    </BrowserRouter>
      
  );
}

export default App;
