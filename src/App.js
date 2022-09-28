import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./client";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";
import Artist from "./pages/Artist";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/category/:id' element={<Category />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/artist/:id' element={<Artist />}/>
          <Route path='checkout' element={<Checkout />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
