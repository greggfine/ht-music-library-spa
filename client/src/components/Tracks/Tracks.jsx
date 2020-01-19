import React, { useState } from "react";
import "./Tracks.styles.scss";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Wave from "../Wave/Wave";
import columns from "../trackColumnData";

export default function Tracks({ subcategoryTracks }) {
  const [currentTrack, setCurrentTrack] = useState(
    "Fireside_HiddenTigerMusic.mp3"
  );

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

  const selectRow = { mode: "radio", clickToSelect: true };

  return (
    <>
      <Wave currentTrack={currentTrack} subcategoryTracks={subcategoryTracks} />

      <BootstrapTable
        hover
        keyField="_id"
        data={firstTenSubcategoryTracks}
        columns={columns}
        rowEvents={rowEvents}
        selectRow={selectRow}
        className="table"
      />
    </>
  );
}
