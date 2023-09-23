import { Container, Nav, Navbar } from "react-bootstrap"
import './header.css'

const Header = () => {
    const defaultFont = { color: "white", fontFamily: "retro" };

    return (
        <Container>
            <Navbar expand='lg d-flex'>
                <Navbar.Brand href="/" className="neon-text" style={{ fontFamily: 'retro', fontWeight: 'bold' }}>Axel Loh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "white", color: "transparent"}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link className="me-3 glitch" style={defaultFont} href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="me-3 glitch" style={defaultFont} href='about'>
                            About
                        </Nav.Link>
                        <Nav.Link className="glitch" style={defaultFont} href='contact'>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;