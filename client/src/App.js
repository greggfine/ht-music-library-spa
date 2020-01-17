import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainCategories from "./components/MainCategories/MainCategories";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <NavBar />
    <Container className="Container fluid">
      <MainCategories />
    </Container>
  </>
);

export default App;
