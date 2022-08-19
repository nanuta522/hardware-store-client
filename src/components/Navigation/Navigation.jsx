import {Nav, Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FerreGuay</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                        <Link to='/'>
                            <Nav.Link as="span">Productos</Nav.Link>
                        </Link>
                        <Link to='/crear'>
                            <Nav.Link as="span">Crear producto</Nav.Link>
                        </Link>
                        <Link to='/'>
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Navigation