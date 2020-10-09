import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col>
          <i className='fas fa-smile'></i> Hello Kaito
          <span> &copy; 2020 </span>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
