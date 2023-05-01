import React from "react";
import ProductItem from "./ProductItem";
import {Container, Row } from 'react-bootstrap'

export default function ProductList({product}) {
  return <div>
    <h1>ProductList</h1>
    <Container>
      <Row  xs={1} md={2} xl={3} className="g-4">
        {product.map(element =>
        <ProductItem element={element} />  )}
      
    
    </Row>
    </Container>
  </div>
}
