import React from 'react';
import './home.css'
import { Container } from 'react-bootstrap'
import Header from '../header/header';

const Home = () => {
  return (
    <Container fluid className="p-0 bg">
      <Header />
    </Container>
  );
}

export default Home;
