import { Navbar as NavbarComponent, Container } from "react-bootstrap";

export const Navbar = () => {
  return (
    <NavbarComponent bg="danger" expand="lg" variant="dark">
      <Container>
        <NavbarComponent.Brand href="#home">
          Toolbox - Challenge
        </NavbarComponent.Brand>
        <NavbarComponent.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </NavbarComponent>
  );
};
