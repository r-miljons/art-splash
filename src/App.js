import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='categories' element={<Categories />}>
          <Route path=':category' element={<Category />}>
            <Route path=':productId' element={<Product />}/>
          </Route>
        </Route>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
