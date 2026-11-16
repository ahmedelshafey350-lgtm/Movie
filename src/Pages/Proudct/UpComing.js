import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from '../Footer/footer';

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWUyNjU5NTNmZmE3Y2I4ODFiYTQ4YzAzNDI5NzdhZCIsIm5iZiI6MTc4OTc0OTQzMS41OTcsInN1YiI6IjZhYWQ2OGI3YjAyYThhODg2ZWFmYWVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBvqvxBEqlrD7VNH0tRPk1KUKwpd44hXNM4Exrt_p_M"

function UpComing() {
    const [Upcoming,Set] = useState([]);
    const [page,setPage] = useState(1);
  const history = useHistory();
    useEffect(() => {
      const fetchUpcoming = async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming',
          {
            params: {
              language: "en-US",
              page
            },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        Set(data.results || []);
      } catch (error) {
        console.error(error);
      }
        };
        fetchUpcoming();
   },[page])
    function getNext() {
       setPage((Prev)=>Prev+1)
    }
    function getPrevious() {
        setPage((Prev)=>Math.max(Prev-1,1))
    }
  function getLink(value) {
     history.push(`/detalis/${value.id}`)
   }
 return (
    <>
      <Container className="mt-4">
        <Row className="cards">
          {Upcoming.map((movie) => (
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
          <button
            id="btn1"
            className="btn btn-primary"
            onClick={getPrevious}
          >
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

export default UpComing
