import { Container, Image, Row, Col } from "react-bootstrap";
import Header from '../header/header';
import potrait from '../../assets/1644991091289.jpg';
import './about.css'

const About = () => {
    const skill = [{ key: "1", value: "HTML:" }, { key: "2", value: "CSS:" }, { key: "3", value: "BootStrap:" }, { key: "4", value: "React JS:" }, { key: "5", value: "Angular:" }, { key: "6", value: "Kotlin:" }, { key: "7", value: "C#:" }]
    const skillPoint = [{ key: "1", value: "80" }, { key: "2", value: "70" }, { key: "3", value: "80" }, { key: "4", value: "80" }, { key: "5", value: "70" }, { key: "6", value: "60" }, { key: "7", value: "50" }]
    return (
        <Container fluid className="p-0 bg">
            <Header />

            <Container>
                <Row className="mt-5">
                    <Col lg={5}  className="col-12 ">
                        <Row>
                            <Col className="col-md-4 col-lg-4">
                                <div className="img-frame">
                                    <Image className="fit" src={potrait} alt='portrait' />
                                </div>
                            </Col>
                            <Col className="col-lg-8">
                                <p>
                                    Name: Axel Loh
                                </p>
                                <p>
                                    Class: Programmer
                                </p>
                                <p>
                                    Experience: 1 Year
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg={6} className="col-12">
                                <fieldset className="fieldset-border ps-1">
                                    <legend className="legend-background" style={{ marginLeft: '30px', marginTop: '-20px', width: '2.4em'}}>Skills</legend>
                                    <Row>
                                        <Col className="ms-4">
                                            {skill.map(s =>
                                                <p key={s.key}>
                                                    {s.value}
                                                </p>
                                            )}
                                        </Col>
                                        <Col className="">
                                            {skillPoint.map(s =>
                                                <p key={s.key}>
                                                    {s.value}
                                                </p>
                                            )}
                                        </Col>
                                    </Row>

                                </fieldset>
                            </Col>

                            <Col className="col-lg-2">
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={7} className="col-12 mt-5 mt-lg-0">
                        <Row>
                            <Col>
                                <fieldset className="fieldset-border ps-1">
                                    <legend className="legend-background" style={{ marginLeft: '30px', marginTop: '-20px', width: '4.7em' }}>
                                        About Me
                                    </legend>

                                    <p className="mx-4">
                                        Hi, I'm Chia Lerk Loh, a programmer that focus on develop Website. I'm from Malaysia. When I develop something, I will make sure User Experience is good because simple website make the best website. React JS, Angular, HTML5, CSS3, BootStrap are the skills that I know for now. Furthermore, I have knowledge on Android Apps and able to code with Kotlin.
                                    </p>
                                </fieldset>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-3">
                            <Col>
                                <fieldset className="fieldset-border ps-1">
                                    <legend className="legend-background" style={{ marginLeft: '30px', marginTop: '-20px', width: '7.3em' }}>
                                        Past Experience
                                    </legend>

                                    <p className="mx-4">
                                        Fple Sdn Bhd<br />
                                        2022 April - 2023 February
                                        <br/>- Build Android Apps using Kotlin
                                        <br/>- Mantain, Enchance, Fix apps to optimise better experience for client
                                    </p>

                                    <p className="mx-4">
                                        Consolsys Sdn Bhd<br />
                                        2023 March - Current
                                        <br/>- Build Webpage with Angular and backend handled with C#
                                        <br/>- Participate in Bulding and Maintaning Banking Website
                                    </p>
                                </fieldset>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

export default About;