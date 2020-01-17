import React, { useState } from "react";
import Track from "../Track/Track";
import "./Tracks.styles.scss";
import ListGroup from "react-bootstrap/ListGroup";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Wave from "../Wave/Wave";

export default function Tracks({ subcategoryTracks }) {
  const [currentTrack, setCurrentTrack] = useState(
    // "Fireside_HiddenTigerMusic.mp3"
    ""
  );
  const columns = [
    {
      dataField: "filename",
      text: "Track Name",
      sort: true
    },
    {
      dataField: "metadata.description",
      text: "Description"
    },
    {
      dataField: "metadata.length",
      text: "Length",
      sort: true
    }
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(row.filename);
      setCurrentTrack(`${row.filename}_HiddenTigerMusic.mp3`);
    }
  };
  const firstTenSubcategoryTracks = subcategoryTracks
    .filter((track, idx) => idx < 10)
    .map(track => {
      return {
        ...track,
        //DOES THIS TAKE AWAY the extension when people download???
        // IF SO, might have to add a new property to database
        filename: track.filename.replace(/_HiddenTigerMusic.mp3/, "")
      };
    });
  return (
    <>
      <Wave currentTrack={currentTrack} />
      <BootstrapTable
        keyField="id"
        data={firstTenSubcategoryTracks}
        columns={columns}
        rowEvents={rowEvents}
      />
    </>
  );
}
