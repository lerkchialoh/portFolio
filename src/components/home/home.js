import React from 'react';
import './home.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../header/header';

const Home = () => {
  return (
    <Container fluid className="p-0 bg">
      <Header />

      <Container className='mt-5'>
        <Row>
          <Col lg={5}>
            <h1 className='mt-lg-5' style={{ color: "white" }}>
              This is a title
            </h1>

            <p>
              Lorem ipsum dolor sit amet. Et autem repellendus qui nesciunt maiores sit voluptatem dolores. Est quis alias vel laborum fugit ea eaque unde in fugiat aperiam?
            </p>

            <p>
              Ab ipsum vitae est magni voluptas eos beatae inventore. Vel galisum quasi in sint saepe et omnis necessitatibus 33 nihil mollitia?
            </p>

            <p>
              Nam nesciunt consequuntur quo nemo voluptas non inventore sint! Ut quia excepturi aut omnis eaque et omnis dicta est quidem enim hic dolores ipsam.
            </p>
          </Col>
        </Row>

        <Button className='mt-2'>Learn More</Button>
      </Container>
    </Container>
  );
}

export default Home;
