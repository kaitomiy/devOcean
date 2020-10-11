import React from 'react';
import { Container } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <Container
      className='py-3'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Hi, I'm Kaito</h1>
    </Container>
  );
};

export default HomeScreen;
