import { Container, Nav, Navbar } from "react-bootstrap"
import './header.css'

const Header = () => {
    const defaultFont = { color: "white", fontFamily: "retro" };

    return (
        <Container>
            <Navbar expand='lg d-flex'>
                <Navbar.Brand href="/" style={{ color: "white", fontFamily:'retro', fontWeight: 'bold' }}>Null</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={defaultFont} /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link className="me-1 glitch" style={defaultFont} href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="me-1 glitch" style={defaultFont} href='about'>
                            About
                        </Nav.Link>
                        <Nav.Link className="me-1 glitch" style={defaultFont}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;