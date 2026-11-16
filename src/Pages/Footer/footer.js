import React from "react";
import "../../footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div>
          <ul>
            <h2>The Basics</h2>
            <li>
              <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">About TMDB</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/contact" target="_blank" rel="noreferrer">Contact Us</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer">API Documentation</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">API for Business</a>
            </li>
            <li>
              <a href="https://status.themoviedb.org/" target="_blank" rel="noreferrer">System Status</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Get Involved</h2>
            <li>
              <a href="https://www.themoviedb.org/bible" target="_blank" rel="noreferrer">Contribution Bible</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/movie/new" target="_blank" rel="noreferrer">Add New Movie</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/tv/new" target="_blank" rel="noreferrer">Add New TV Show</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Community</h2>
            <li>
              <a href="https://www.themoviedb.org/faq" target="_blank" rel="noreferrer">Guidelines</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/discuss" target="_blank" rel="noreferrer">Discussions</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/leaderboard" target="_blank" rel="noreferrer">Leaderboard</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/discuss" target="_blank" rel="noreferrer">Support Forums</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Legal</h2>
            <li>
              <a href="https://www.themoviedb.org/terms-of-use" target="_blank" rel="noreferrer">Terms of Use</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/documentation/api/terms-of-use" target="_blank" rel="noreferrer">API Terms of Use</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/dmca-policy" target="_blank" rel="noreferrer">DMCA Policy</a>
            </li>
          </ul>
        </div>
        
        {/* <div
          className="select"
          id="btn"
          onclick={() => {
            getElement(this.id);
          }}
        >
          <div>
            {" "}
            <button className="btn btn-primary">select language</button>
          </div>
          <div className="">
            <input type="search" placeholder="Filter"></input>
            <div>
              {lang.map((value, index) => (
                <h2 key={index}>
                  {value.english_name}({value.iso_639_1})
                </h2>
              ))}
            </div>
          </div>
        </div> */}
      </div>
        <div class="lastbootom">
        <p>© 2026 Iron Meridian — Built for riders who verify the spec sheet.</p>
    </div>
    </>
  );
}

export default Footer;
