import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainCategories from "./components/MainCategories/MainCategories";
import CategoriesProvider from "./components/CategoriesProvider";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <NavBar />
    <Container className="Container fluid">
      <CategoriesProvider>
        <MainCategories />
      </CategoriesProvider>
    </Container>
  </>
);

export default App;
