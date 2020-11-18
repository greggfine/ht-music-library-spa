import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainCategories from "./components/MainCategories/MainCategories";
import { CategoriesProvider } from "./components/CategoriesProvider";
// import { SearchFieldProvider } from "./components/SearchFieldProvider";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    {/* <SearchFieldProvider> */}
    <NavBar />
    <Container className="Container fluid">
      <CategoriesProvider>
        <MainCategories />
      </CategoriesProvider>
    </Container>
    {/* </SearchFieldProvider> */}
  </>
);

export default App;
