import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Container className='py-3'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/about' component={AboutScreen} />
          <Route exact path='/contact' component={ContactScreen} />
          <Route exact path='/projects' component={ProjectsScreen} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
