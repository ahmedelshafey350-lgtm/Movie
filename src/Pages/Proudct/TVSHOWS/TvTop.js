import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../Footer/footer";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWUyNjU5NTNmZmE3Y2I4ODFiYTQ4YzAzNDI5NzdhZCIsIm5iZiI6MTc4OTc0OTQzMS41OTcsInN1YiI6IjZhYWQ2OGI3YjAyYThhODg2ZWFmYWVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBvqvxBEqlrD7VNH0tRPk1KUKwpd44hXNM4Exrt_p_M"

function TVtop() {
  const history = useHistory();
  const [topRateing, set] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const FetchingTopRating = async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/tv/top_rated',
          {
            params: { language: "en-US", page },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        set(data.results || []);
      } catch (error) {
        console.log(error);
      }
    };
    FetchingTopRating();
  }, [page]);

  function getNext() {
    setPage((prev) => prev + 1);
  }

  function getPrevious() {
    setPage((prev) => Math.max(prev - 1, 1));
  }

  function getLink(value) {
    history.push(`/TvShow/${value.id}`);
  }

  return (
    <div>
      <Container className="mt-4">
        <Row className="cards">
          {topRateing.map((movie) => (
            <Col key={movie.id} sm={1} md={4} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />

                <Card.Body>
                  <Card.Title>
                    <button
                      type="button"
                      className="btn btn-link p-0 text-start"
                      onClick={() => getLink(movie)}
                    >
                      {movie.name}
                    </button>
                  </Card.Title>
                  <Card.Text>{movie.first_air_date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="button">
          <button id="btn1" className="btn btn-primary" onClick={getPrevious}>
            Previous
          </button>
          <button id="btn2" className="btn btn-primary" onClick={getNext}>
            Next
          </button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default TVtop
