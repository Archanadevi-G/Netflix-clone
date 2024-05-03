import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import TitleCards from "../../components/TitleCards/TitleCards";
import request from "../../utils/request";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />

      <TitleCards
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />

      <TitleCards title="Trending Now" fetchUrl={request.fetchTrending} />
      <TitleCards title="Top Rated" fetchUrl={request.fetchTopRated} />
      <TitleCards title="Crime Movies" fetchUrl={request.fetchCrimeMovies} />
      <TitleCards title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <TitleCards title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <TitleCards
        title="Romantic Movies"
        fetchUrl={request.fetchRomanceMovies}
      />
      <TitleCards title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default Home;
