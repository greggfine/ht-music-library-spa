import React, { useState } from "react";
import Track from "../Track/Track";
import "./Tracks.styles.scss";
import ListGroup from "react-bootstrap/ListGroup";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Wave from "../Wave/Wave";

export default function Tracks({ subcategoryTracks }) {
  const [currentTrack, setCurrentTrack] = useState(
    "Fireside_HiddenTigerMusic.mp3"
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
      setCurrentTrack(`${row.filename}_HiddenTigerMusic.mp3`);
    }
  };

  const firstTenSubcategoryTracks = subcategoryTracks
    .filter((track, idx) => idx < 10)
    .map(track => {
      return {
        ...track,
        filename: track.filename.replace(/_HiddenTigerMusic.mp3/, "")
      };
    });

  const selectRow = {
    mode: "radio",
    clickToSelect: true
  };

  return (
    <>
      <Wave currentTrack={currentTrack} />
      <BootstrapTable
        hover
        keyField="_id"
        data={firstTenSubcategoryTracks}
        columns={columns}
        rowEvents={rowEvents}
        selectRow={selectRow}
      />
    </>
  );
}
