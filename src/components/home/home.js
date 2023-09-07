import React from 'react';
import './home.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../header/header';
import CustomButton from '../../utils/custom-button/custom-button';

const Home = () => {
  const onclick = () => {
    return window.location.href='/about';
  }

  return (
    <Container fluid className="p-0 bg">
      <Header />

      <Container className='mt-5'>
        <Row>
          <Col className='top-down-animation' lg={5}>
            <h1 className='mt-lg-5' style={{ color: "white" }}>
              This is a title
            </h1>

            <p >
              Lorem ipsum dolor sit amet. Et autem repellendus qui nesciunt maiores sit voluptatem dolores. Est quis alias vel laborum fugit ea eaque unde in fugiat aperiam?
            </p>

            <p>
              Ab ipsum vitae est magni voluptas eos beatae inventore. Vel galisum quasi in sint saepe et omnis necessitatibus 33 nihil mollitia?
            </p>

            <p>
              Nam nesciunt consequuntur quo nemo voluptas non inventore sint! Ut quia excepturi aut omnis eaque et omnis dicta est quidem enim hic dolores ipsam.
            </p>

            <CustomButton className="mt-2" value="About Me" onClickBtn={onclick} />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home;
