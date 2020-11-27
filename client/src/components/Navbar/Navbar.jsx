import React, { useState, useContext } from "react";
import "./NavBar.styles.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import htlogo from "./img/ht-logo.png";
// import { SearchFieldCtx } from "../SearchFieldProvider";

export default function NavBar() {
  //   const searchFieldCtx = useContext(SearchFieldCtx);
  //   const [searchFieldInput, setSearchFieldInput] = useState("");
  //   const handleSearchFieldInput = e => {
  //     setSearchFieldInput(e.target.value);
  //   };
  //   const handleSearchSubmit = async e => {
  //     e.preventDefault();
  //     const tracks = await fetch(`/tracks/search/${searchFieldInput}`);
  //     const tracksJSON = await tracks.json();
  //     setSearchFieldInput("");
  //   };
  return (
    <Navbar bg="light" expand="lg" className="NavBar">
      <Navbar.Brand href="#home">
        <img
          src={htlogo}
          className="d-inline-block align-top NavBar-logo"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">HT Music Library</Nav.Link>
          {/* <Nav.Link href="#link">Latest Tracks</Nav.Link> */}
        </Nav>
        {/* <Form
          inline
          className="NavBar-form"
          onSubmit={searchFieldCtx.handleSearchSubmit}
        >
          <FormControl
            type="text"
            placeholder="Search by track name"
            className="mr-sm-2"
            value={searchFieldCtx.searchFieldInput}
            onChange={searchFieldCtx.handleSearchFieldInput}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
