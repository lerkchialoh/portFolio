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
                <Row lg={4} className="mt-4">
                    <Form >
                        <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form>
                </Row>
                <Row lg={4} className="mt-3">
                    <Form >
                        <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form>
                </Row>
                <Row lg={4} className="mt-3">
                    <Form>
                        <Form.Label style={{ color: 'white' }}>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter message" />
                    </Form>
                </Row>

                <Button className="mt-4">Contact Us</Button>

                <div className="d-flex justify-content-start mt-4">
                    <a id="fb" href="https://www.facebook.com/tiduslohchialerk/">
                        <div className="image-container me-3">
                            <Image className="image" src={facebook} alt="facebook" />
                        </div>
                    </a>

                    <a id="whatsapp" href="https://api.whatsapp.com/send?phone=0127515796">
                        <div className="image-container me-3">
                            <Image className="image" src={whatsapp} alt="whatsapp" />
                        </div>
                    </a>

                    <a id="linkedin" href="https://www.linkedin.com/in/loh-chia-lerk-5a2054232/">
                        <div className="image-container">
                            <Image className="image" src={linkedin} alt="linkedin" />
                        </div>
                    </a>
                </div>
            </Container>
        </Container>
    );
}

export default Contact;