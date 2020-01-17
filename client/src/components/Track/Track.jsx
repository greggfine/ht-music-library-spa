import React from "react";
import "./Track.styles.scss";
import ListGroup from "react-bootstrap/ListGroup";

export default function Track({ filename }) {
  return (
    <ListGroup.Item className="Track" action>
      {filename}
      {/* <audio src={`audio/${filename}`} controls></audio> */}
    </ListGroup.Item>
  );
}
