import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import ProductList from "../products/ProductList";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/product" exact element={<ProductList />} />
        <Route path="/cart" exact element={<CartDetail />} />
        <Route path="/saveProduct/:productId" element={<AddOrUpdateProduct />} />
        <Route path="/saveProduct" element={<AddOrUpdateProduct />} />
        <Route element={<NotFound />} />

      </Routes>
    </Container>
  );
}

export default App;
