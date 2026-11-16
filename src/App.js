
import React from "react";
import Header from "./Pages/Header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/home/home";
import Contact from "./Pages/contact/contact";
import Proudct from "./Pages/Proudct/proudct";
import Love from "./Pages/Faviarot/Love";
import Proudctdetalis from "./Pages/Proudct/proudctdetalis";
import NowPlaying from "./Pages/Proudct/NowPlaying";
import UpComing from "./Pages/Proudct/UpComing";
import TopRated from "./Pages/Proudct/TopRated";
import PepoleList from "./Pages/Proudct/PepoleList";
import PepoleDetalis from "./Pages/Proudct/pepoleDetalis";
import OnTv from "./Pages/Proudct/TVSHOWS/OnTv";
import Tvpopular from "./Pages/Proudct/TVSHOWS/TVpopular";
import TvShow from "./Pages/Proudct/TVSHOWS/TVshowDetalis";
import TVtop from "./Pages/Proudct/TVSHOWS/TvTop";
import AiringToday from "./Pages/Proudct/TVSHOWS/Airing";
import Login_Sign from "./Pages/Information/Login_Sign";
import Signin from "./Pages/Information/Signon";

function App() {
  return (
    
      <>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/movies" exact component={Proudct} />
          <Route path="/favorit" exact component={Love} />
          <Route path="/detalis/:id" exact component={Proudctdetalis} />
          <Route path="/nowplaying" exact component={NowPlaying} />
          <Route path="/upcoming" exact component={UpComing} />
          <Route path="/toprated" exact component={TopRated} />
          <Route path="/PepoleList" exact component={PepoleList} />
          <Route path="/PepoleDetalis/:id" exact component={PepoleDetalis} />
          <Route path="/TvShow/:id" exact component={TvShow} />
          <Route path="/OnTv" exact component={OnTv} />
          <Route path="/Tvpopular" exact component={Tvpopular} />
          <Route path="/TVtop" exact component={TVtop} />
          <Route path="/AiringToday" exact component={AiringToday} />
          <Route path="/Login_Sign" exact component={Login_Sign} />
          <Route path="/Signin" exact component={Signin} />

        </Switch>
      </Router>
      </>
   
  );
}

export default App;

