import React from 'react';
import { Container } from 'react-bootstrap';
import About from './AboutScreen';

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
      <div>
        <h1>Hi, I'm Kaito</h1>
        <About />
      </div>
    </Container>
  );
};

export default HomeScreen;
