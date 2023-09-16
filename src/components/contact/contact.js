import { Col, Container, Image, Row } from "react-bootstrap";
import Header from "../header/header";
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp-color-icon.svg';
import './contact.css'
import SocialButton from "../../utils/social-button/social-button";
import potrait from '../../assets/1644991091289.jpg';
import cardBg from '../../assets/card-bg.jpg';

const Contact = () => {
    // const endPoint = new EndPoint();

    // const sendEmailBtn = () => {
    //      HeaderApi(endPoint.baseUrl + endPoint.sendEmail, "Get").then(async response => {
    //         if (response.status === 200) {
    //             console.log(await response.json())
    //         } else {
    //             console.error(response.statusText);
    //         }
    //     });
    // }

    return (
        <Container fluid className="p-0 bg">
            <Header />

            <Container className="padding-parent-container">
                <div className="contact-card mx-auto position-relative mt-5" style={{backgroundImage: `url(${cardBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <Row className="padding-container d-flex flex-row align-items-center">
                        <Col>
                            <div className="contact-image">
                                <Image className="portrait" src={potrait} alt="portrait" />
                            </div>
                        </Col>

                        <Col>
                            <h6 className="font" style={{ color: "black", fontFamily: "sans-serif", fontWeight: "bold" }}>Loh Chia Lerk</h6>
                            <h6 className="font"  style={{ color: "black", fontFamily: "sans-serif" }}>Software Developer</h6>
                            <div className="d-flex justify-content-start mt-4">
                                <SocialButton id="whatsapp" href="https://api.whatsapp.com/send?phone=0127515796" borderColor="#25D366" backgroundColor="white" className="me-3" src={whatsapp} alt="whatsapp" />
                                <SocialButton id="linkedin" href="https://www.linkedin.com/in/loh-chia-lerk/" borderColor="#0072B1" backgroundColor="#0072B1" className="" src={linkedin} alt="linkedin" />
                            </div>
                        </Col>
                    </Row>

                    <div className="position-absolute bottom-0" style={{ width: "100%" }}>
                        <div style={{ height: "1px", backgroundColor: "black" }} />
                        <Row>
                            <Col className="border-end border-dark">
                                <a href="tel: 012-7515796"><h4 className="link-font py-1" style={{ marginLeft: "0.5em" }}>(+60) 127515796</h4></a>
                            </Col>
                            <Col>
                                <a href="mailto: chiaerk@gmail.com"><h4 className="link-font py-1">chiaerk@gmail.com</h4></a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Contact;