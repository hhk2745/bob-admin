// import { Navigate, useNavigate } from 'react-router-dom';

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const NavSupport = ()=>{
  return <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#!">Action</a>
                <a className="dropdown-item" href="#!">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#!">Something else here</a>
            </div>
        </li>
    </ul>
  </div>
}


export const Sidebar = ()=>{
  const navigate = useNavigate();

  return <div className="border-end bg-white" id="sidebar-wrapper">
    
    <div className="sidebar-heading border-bottom bg-light">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <a className="navbar-brand link-primary" href='javascript:void(0)' onClick={()=>{
            navigate("/")
          }}>BOB</a>
        </span>
      </nav>
      </div>
    <div className="list-group list-group-flush">
      {/* <Navigate to="/member" replace={true} /> */}
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href='javascript:void(0)' onClick={()=>{
        navigate('/member')
      }}>회원관리</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href='javascript:void(0)' onClick={()=>{
        navigate('/room')
      }}>방관리</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href='javascript:void(0)' onClick={()=>{
        navigate('/company')
      }}>업체관리</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href='javascript:void(0)' onClick={()=>{
        navigate('/menu')
      }}>메뉴관리</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href='javascript:void(0)' onClick={()=>{
        navigate('/order')
      }}>주문관리</a>
    </div>
  </div>
}


export const NavScrollExample = ()=>{
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}