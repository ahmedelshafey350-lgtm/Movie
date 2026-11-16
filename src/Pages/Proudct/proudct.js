import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import axiosInstance from "../../Network/axiosinstance";
import "../../product.css";
import Footer from '../Footer/footer'

import {
  CBadge,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSearchButton,
} from "@coreui/react";
// popular Movie
function Proudct() {
  const [type,settype]=useState("")
  const [qury, getQury] = useState("");
  const [moveis, setMoveis] = useState([]);
  const history = useHistory();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = qury
      ? `search/movie?api_key=89e265953ffa7cb881ba48c0342977ad&query=${qury}`
      : `movie/popular?api_key=89e265953ffa7cb881ba48c0342977ad&page=${page}`;
       
    axiosInstance
      .get(url)
      .then((Response) => {
        setMoveis(Response.data.results);
      })
      .catch((error) => console.log(error));
  }, [page, qury]);

  function getNext() {
    setPage((prev) => prev + 1);
  }
  function getPrevious() {
    setPage((prev) => Math.max(prev - 1, 1));
  }
  function getlink(props) {
    history.push(`/detalis/${props.id}`);
  }
  function getSearch(value) {
    getQury(value);
  }
  return (
    <>
      <div className="Search">
        <CSearchButton
          onTrigger={() => settype(true)}
          aria-label="Open search dialog"
          aria-controls="search-button-modal"
          shortcut="meta+/,ctrl+/"
        />
        <CModal
          visible={type}
          onClose={() => settype(false)}
          aria-labelledby="search-button-modal-title"
        >
          <CModalHeader>
            <CModalTitle id="search-button-modal-title" className="w-100">
              <CFormInput
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>{getSearch(e.target.value)}}
              />
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p className="text-body-secondary small mb-2">Recent searches</p>
            <CListGroup flush>
              <CListGroupItem
                as="button"
                type="button"
                className="d-flex justify-content-between align-items-center"
              >
                {qury}
                <CBadge color="secondary" shape="rounded-pill" onClick={()=>{settype(false)}}>
                  Open
                </CBadge>
              </CListGroupItem>
            </CListGroup>
          </CModalBody>
        </CModal>
      </div>
      <Container className="mt-4">
        <Row className="cards">
          {moveis.map((movie) => (
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
                      onClick={() => {
                        getlink(movie);
                      }}
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
            onClick={() => {
              getPrevious();
            }}
          >
            Previous
          </button>
          <button
            id="btn2"
            className="btn btn-primary"
            onClick={() => {
              getNext();
            }}
          >
            Next
          </button>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default Proudct;
