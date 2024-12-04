import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class GalleryComponent1 extends Component {
  state = { lupinFilms: [] };

  getLupin = () => {
    fetch("http://www.omdbapi.com/?apikey=25cea59a&s=lupin")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore di chiamata");
        }
      })
      .then((data) => {
        console.log("dovrebbe arrivare risultato di lupin", data);
        this.setState({ lupinFilms: data.Search.slice(0, 6) });
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };

  componentDidMount() {
    this.getLupin();
  }

  render() {
    console.log("verifica risultato");
    return (
      <Container className="mt-5">
        <h2 className="text-light">Lupin Film&Series</h2>
        <Row xs={1} sm={2} md={3} lg={6} xl={6} className="g-4">
          {this.state.lupinFilms.map((film) => (
            <Col key={film.imdbID} className="d-flex align-items-stretch">
              <Card className="w-100">
                <Link to={`/movie-details/${film.imdbID}`}>
                  <Card.Img src={film.Poster} className="img-fluid" />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GalleryComponent1;
