import { Button, Container, Form, Row, Image } from "react-bootstrap";
import Header from "../header/header";
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp-color-icon.svg';
import './contact.css'

const Contact = () => {
    return (
        <Container fluid className="p-0 bg">
            <Header />

            <Container>
                <h1 className="mt-5" style={{ color: "white" }}>Message Me</h1>
                <Row className=" col-lg-4 mt-4">
                    <Form >
                        <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form>
                </Row>
                <Row className="col-lg-4 mt-3">
                    <Form >
                        <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form>
                </Row>
                <Row className="col-lg-4 mt-3">
                    <Form>
                        <Form.Label style={{ color: 'white' }}>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter message" />
                    </Form>
                </Row>

                <Button className="mt-4">Contact Us</Button>

                <div className="d-flex justify-content-start mt-4">
                    <div className="image-container me-3">
                        <Image className="image" src={facebook} alt="facebook" />
                    </div>
                    <div className="image-container me-3">
                        <Image className="image" src={whatsapp} alt="whatsapp" />
                    </div>
                    <div className="image-container">
                        <Image className="image" src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Contact;