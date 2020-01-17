import React from "react";
import "./Navbar.styles.scss";
import Nav from "react-bootstrap/Nav";

import htlogo from "./img/ht-logo.png";

export default function Navbar() {
  return (
    // <nav className="NavBar">
    // <img src={htlogo}></img>
    // </nav>

    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
