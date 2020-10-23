import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardDeck, Container } from 'react-bootstrap';
import axios from 'axios';

import Gif from '../components/Gif';

const ProjectsScreen = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchDeta = async () => {
      const repos = await axios({
        method: 'GET',
        url: 'https://api.github.com/users/kaitomiy/repos',
      });

      setRepos(repos.data);
    };

    fetchDeta();
  }, []);

  return (
    <Container className='py-3'>
      <h1>My Projects</h1>
      <Gif />
      <Row>
        {repos.map((repo) => (
          <Col key={repo.id} sm={6} md={4}>
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className='fas fa-code'></i> {repo.name}
                  </Card.Title>
                  <Card.Text>
                    <i className='fas fa-info-circle'></i> {repo.description}
                  </Card.Text>
                  <Card.Text>
                    <i className='fas fa-laptop-code'></i> {repo.language}
                  </Card.Text>
                </Card.Body>
                <Button
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-github'></i>
                </Button>
              </Card>
            </CardDeck>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsScreen;
