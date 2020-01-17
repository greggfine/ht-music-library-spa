import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainCategories from "./components/MainCategories/MainCategories";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <Container className="Container">
      <Navbar />

      <MainCategories />
    </Container>
  </>
);

export default App;
