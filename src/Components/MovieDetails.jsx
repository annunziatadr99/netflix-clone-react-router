import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${movieId}`
      );
      const data = await response.json();
      setMovieDetails(data);
    };

    const fetchComments = async () => {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzMzMjQ3NzEsImV4cCI6MTczNDUzNDM3MX0.IAjQXFxI7XZ_bD1IWjQnV0ekLDhszFc1-CAZezZJxZU",
          },
        }
      );
      const data = await response.json();
      setComments(data);
    };

    fetchMovieDetails();
    fetchComments();
  }, [movieId]);

  return (
    <Container className="mt-5">
      {movieDetails ? (
        <>
          <Row>
            <Col md={4}>
              <Image src={movieDetails.Poster} alt={movieDetails.Title} fluid />
            </Col>
            <Col md={8}>
              <h2>{movieDetails.Title}</h2>
              <p>{movieDetails.Plot}</p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Genre:</strong> {movieDetails.Genre}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Director:</strong> {movieDetails.Director}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Actors:</strong> {movieDetails.Actors}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Released:</strong> {movieDetails.Released}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Runtime:</strong> {movieDetails.Runtime}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rating:</strong> {movieDetails.imdbRating}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>Comments</h3>
              {comments.map((comment) => (
                <ListGroup key={comment._id} className="mb-2">
                  <ListGroup.Item>
                    <strong>Comment:</strong> {comment.comment}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Rate:</strong> {comment.rate}
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Col>
          </Row>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
};

export default MovieDetails;
