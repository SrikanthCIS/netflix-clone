import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../middleware/Requests";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="TopRatedS" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
