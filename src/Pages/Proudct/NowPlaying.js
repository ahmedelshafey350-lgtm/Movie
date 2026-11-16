import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../Footer/footer";
import { useHistory } from "react-router-dom";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWUyNjU5NTNmZmE3Y2I4ODFiYTQ4YzAzNDI5NzdhZCIsIm5iZiI6MTc4OTc0OTQzMS41OTcsInN1YiI6IjZhYWQ2OGI3YjAyYThhODg2ZWFmYWVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBvqvxBEqlrD7VNH0tRPk1KUKwpd44hXNM4Exrt_p_M"

function NowPlaying() {
  const [nowPlaying, setNow] = useState([]);
  const [page, setPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const { data } = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
          params: {
            language: "en-US",
            page,
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        setNow(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNowPlaying();
  }, [page]);

  function getNext() {
    setPage((prev) => prev + 1);
  }

  function getPrevious() {
    setPage((prev) => Math.max(prev - 1, 1));
  }

  function getlink(value) {
    history.push(`/detalis/${value.id}`);
  }
  return (
    <>
      <Container className="mt-4">
        <Row className="cards">
          {nowPlaying.map((movie) => (
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
                      onClick={() => getlink(movie)}
                    >
                      {movie.title}
                    </button>
                  </Card.Title>
                  <Card.Text>{movie.release_date}</Card.Text>
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
    </>
  );
}

export default NowPlaying;
