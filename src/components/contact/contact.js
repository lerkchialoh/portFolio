import { Container, Form, Row } from "react-bootstrap";
import Header from "../header/header";
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp-color-icon.svg';
import './contact.css'
import CustomButton from "../../utils/custom-button/custom-button";
import SocialButton from "../../utils/social-button/social-button";

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

                <CustomButton className="mt-4" value="Contact Us" href=" " />

                <div className="d-flex justify-content-start mt-4">
                    <SocialButton id="whatsapp" href="https://api.whatsapp.com/send?phone=0127515796" className="me-3" src={whatsapp} alt="whatsapp" />
                    <SocialButton id="linkedin" href="https://www.linkedin.com/in/loh-chia-lerk-5a2054232/" className="" src={linkedin} alt="linkedin" />
                </div>
            </Container>
        </Container>
    );
}

export default Contact;