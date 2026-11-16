import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "../../detalis.css";
import Footer from '../Footer/footer'
import axios from "axios";

function PepoleDetalis() {
  const { id } = useParams();
  const [detalis, set] = useState({});
  useEffect(() => {
    if (!id) return;
    axios
        .get(`https://api.themoviedb.org/3/person/${id}?api_key=89e265953ffa7cb881ba48c0342977ad`)
        
      .then((Response) => {
          set(Response.data);
          console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div
        className="movie-details"
        style={{
          "--backdrop": `url(https://image.tmdb.org/t/p/w500/${detalis.profile_path})`,
        }}
      >
        <div className="movie-overlay"></div>

        <Container className="movie-container">
          <Row className="align-items-start g-4">
            {/* Poster */}
            <Col lg={3} md={4} sm={5}>
              <div className="poster-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detalis.profile_path}`}
                  alt={detalis.name}
                  className="movie-poster"
                />
              </div>
            </Col>

            {/* Details */}
            <Col lg={9} md={8} sm={7}>
              {/* Title */}
              <div className="movie-title">
                <h1>{detalis.name}</h1>
              </div>
              {/* Movie information */}
              <div className="movie-info">
                <Badge className="certification">{detalis.certification}</Badge>

                <span>{detalis.birthday}</span>
                <span>•</span>
                {/* <span>{detalis.genres}</span> */}
                <span>•</span>
                <span>{detalis.duration}</span>
              </div>
              {/* Rating */}
              <div className="rating-section">
                <div className="rating-circle">
                  <strong>{detalis.rating}</strong>
                  <small>
                    User
                    <br />
                    Score
                  </small>
                </div>

                <div className="emojis">😍 😃 🤯</div>

                <Button className="vibe-btn">
                  What's your Vibe? <i className="bi bi-info-circle"></i>
                </Button>
              </div>
              {/* Buttons */}
              <div className="action-buttons">
                <Button className="round-btn">
                  <i className="bi bi-list-ol"></i>
                </Button>

                <Button className="round-btn">
                  <i className="bi bi-heart-fill"></i>
                </Button>

                <Button className="round-btn">
                  <i className="bi bi-bookmark-fill"></i>
                </Button>
                {detalis.homepage ? (
                  <a href={detalis.homepage} target="_blank" rel="noreferrer">
                    <Button className="trailer-btn">
                      <i className="bi bi-play-fill"></i>
                      Play Trailer
                    </Button>
                  </a>
                ) : (
                  <Button className="trailer-btn" disabled>
                    <i className="bi bi-play-fill"></i>
                    Play Trailer
                  </Button>
                )}
              </div>
              {/* Tagline */}
              <p className="tagline">{detalis.tagline}</p>
              {/* Overview */}
              <div className="overview">
                <h3>Overview</h3>

                <p>{detalis.biography}</p>
              </div>
            </Col>

            <Row className="credits">
              {detalis?.genres?.map((person, index) => (
                <Col md={4} sm={6} key={index}>
                  <div className="credit">
                    <span>{person.name}</span>

                    <span>{person.role}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  );
}

export default PepoleDetalis
