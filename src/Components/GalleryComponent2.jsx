import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
class GalleryComponent2 extends Component {
  state = { avengersFilms: [] };
  getAvengers = () => {
    fetch("http://www.omdbapi.com/?apikey=25cea59a&s=avengers")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore di chiamata");
        }
      })
      .then((data) => {
        console.log("dovrebbe arrivare risultato di avengers", data);
        this.setState({ avengersFilms: data.Search.slice(0, 6) });
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };
  componentDidMount() {
    this.getAvengers();
  }
  render() {
    console.log("verifica risultato");
    return (
      <Container className="mt-5">
        <h2 className="text-light">Avengers Saga</h2>
        <Row xs={1} sm={2} md={3} lg={6} xl={6} className="g-4">
          {this.state.avengersFilms.map((film) => (
            <Col key={film.imdbID} className="d-flex align-items-stretch">
              <Card className="w-100">
                <Card.Img src={film.Poster} className="img-fluid" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default GalleryComponent2;
