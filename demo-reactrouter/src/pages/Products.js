import React, { Component } from "react";
import axios from "axios";

import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
        products: []
    }
  }

  componentDidMount() {
    axios.get("https://34cil.sse.codesandbox.io/products").then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  render() {
      const products = this.state.products;
      return (
          <Container>
              <h2>Products</h2>
              <Row>
                  { products.map((product, index) => (
                      <Col key={index} sm="4">
                          <Card>
                              <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                              <CardBody>
                                  <CardTitle tag="h5">{product.name}</CardTitle>
                                  <CardText>{product.description}</CardText>
                                  <CartContext.Consumer>
                                    {({ addToCart }) => (
                                      <Button onClick={() => addToCart(product)}>
                                        Add to cart
                                      </Button>
                                    )}
                                  </CartContext.Consumer>
                              </CardBody>
                          </Card>
                      </Col>
                  ))}
              </Row>
          </Container>
      )
  }
}

export default Products;