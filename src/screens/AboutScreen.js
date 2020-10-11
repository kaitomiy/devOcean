import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const AboutScreen = () => {
  return (
    <Container
      className='py-3'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ListGroup as='ul'>
        <ListGroup.Item as='li' active>
          <h4>
            <i className='fas fa-desktop'></i> FRONTEND
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>
            <i className='fab fa-html5'></i> HTML,{' '}
            <i className='fab fa-css3-alt'></i> CSS,{' '}
            <i className='fab fa-js'></i> JavaScript,{' '}
            <i className='fab fa-react'></i> React
          </h4>
        </ListGroup.Item>
        <ListGroup.Item as='li' active>
          <h4>
            <i className='fas fa-server'></i> BACKEND
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>
            <i className='fab fa-node'></i> Node.js, Express
          </h4>
        </ListGroup.Item>
        <ListGroup.Item as='li' active>
          <h4>
            <i className='fas fa-database'></i> DATABASE
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>MongoDB, MySQL</h4>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default AboutScreen;
