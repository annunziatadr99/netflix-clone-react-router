import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Grid } from "react-bootstrap-icons";

const TvShow = () => (
  <Container
    fluid
    className="d-flex justify-content-between align-items-center my-4 bg-dark"
  >
    <Row className="w-100">
      <Col className="d-flex align-items-center">
        <h1 className="me-4 fs-2 text-light">TV Shows</h1>
        <Dropdown className="border border-secondary rounded">
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            className="text-light"
          >
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Science Fiction</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Animation</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          variant="dark"
          className="border border-secondary text-light me-2"
        >
          <List />
        </Button>
        <Button variant="dark" className="border border-secondary text-light">
          <Grid />
        </Button>
      </Col>
    </Row>
  </Container>
);

const FilmsGallery = ({ children }) => (
  <Container className="mt-5">
    <h2 className="text-light">Films</h2>
    {children}
  </Container>
);

export { TvShow, FilmsGallery };
