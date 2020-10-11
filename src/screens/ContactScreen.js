import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <Container
      className='py-3'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ListGroup>
        <ListGroup.Item active>
          <h4>Contact</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>
            <i className='far fa-envelope'></i> kaitomiy@gmail.com
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>
            <a
              href='https://github.com/kaitomiy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
            GitHub
          </h4>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default ContactScreen;
