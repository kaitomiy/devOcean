import React from 'react';
import GifPlayer from 'react-gif-player';
import { Row, Col, Card, CardDeck, Container } from 'react-bootstrap';

const Gif = () => {
  return (
    <Container className='py-3'>
      <Row>
        <Col>
          <CardDeck>
            <Card sm={6} md={4}>
              <Card.Body>
                <Card.Title>proshop-ecom</Card.Title>
                <GifPlayer gif='/gif/proshop.gif' />
              </Card.Body>
            </Card>
            <Card sm={6} md={4}>
              <Card.Body>
                <Card.Title>yelpcamp-v2</Card.Title>
                <GifPlayer gif='/gif/yelpcamp.gif' />
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Gif;
