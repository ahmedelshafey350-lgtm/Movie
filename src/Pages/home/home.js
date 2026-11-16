import React from "react";
import Footer from "../Footer/footer";
import axios from "axios";
import "../../home.css";
import About from "../about/about";
import image1 from "../../Image/Fast-Five-اجمل-صور-اكشن-أجنبي-2.jpg";
import image2 from "../../Image/فيلم-الالمانى.jpg";
import image3 from "../../Image/R.jpg";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY || process.env.REACT_APP_API_TOKEN;

function Home() {
  const [Movie, Set] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const FetchingHome = async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              language: "en-US",
              page: "1",
              api_key: API_KEY,
            },
          },
        );
        Set(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    FetchingHome();
  }, []);
  function getLink(value) {
    history.push(`/detalis/${value.id}`);
  }
  return (
    <>
      <div class="slider">
        <div class="slides">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="contanier5">
        <div className="CardHome">
          {Movie.map((value, index) => (
            <CCard
              style={{ width: "15rem", height: "350px" }}
              key={index}
              className="cardHom"
            >
              <CCardImage
                orientation="top"
                style={{ height: "150px" }}
                src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
              />
              <CCardBody>
                <CCardTitle>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-start"
                    onClick={() => getLink(value)}
                  >
                    {value.title}
                  </button>
                </CCardTitle>
                <CCardText>{value.release_date}</CCardText>
              </CCardBody>
            </CCard>
          ))}
        </div>
      </div>
      <About />
      <Footer id="footer" />
    </>
  );
}

export default Home;
