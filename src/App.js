import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./client";
import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout";
import Artist from "./pages/Artist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='category/:id' element={<Category />}/>
            <Route path='product/:id' element={<Product />}/>
            <Route path='artist/:id' element={<Artist />}/>
            <Route path='products/:query' element={<Products />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='profile' element={<Profile />}/>
          </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
