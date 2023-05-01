import React from "react";
import { Col ,Card} from "react-bootstrap";

export default function ProductItem({element}) {
  return <Col>
   <Card>
            <Card.Img variant="top" src={element.image} style={{width:'200px', height:'200px'}} />
            <Card.Body>
              <Card.Title>Name:  {element.title}</Card.Title>
              <Card.Text>  
              price:  {element.price}
              </Card.Text>
            </Card.Body>
          </Card>
  
  </Col>
  
 
}
