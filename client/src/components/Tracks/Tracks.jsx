import React, { useState, useContext } from "react";
import "./Tracks.styles.scss";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Wave from "../Wave/Wave";
import columns from "../trackColumnData";
// import { SearchFieldCtx } from "../SearchFieldProvider";

export default function Tracks({ subcategoryTracks }) {
  //   let searchFieldCtxFormatted;
  //   const searchFieldCtx = useContext(SearchFieldCtx);
  //   if (searchFieldCtx.searchFieldTrackResult) {
  //     searchFieldCtxFormatted = searchFieldCtx.searchFieldTrackResult[0].filename.replace(
  //       /_HiddenTigerMusic.mp3/,
  //       ""
  //     );
  //   }
  //   console.log(searchFieldCtxFormatted); // undefined and string

  const [currentTrack, setCurrentTrack] = useState(
    "Fireside_HiddenTigerMusic.mp3"
  );

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setCurrentTrack(`${row.filename}_HiddenTigerMusic.mp3`);
    }
  };

  const firstTenSubcategoryTracks = subcategoryTracks
    // .filter((track, idx) => idx < 10)
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

      <div className="table-container">
        <BootstrapTable
          hover
          keyField="_id"
          data={firstTenSubcategoryTracks}
          //   data={[searchFieldCtxFormatted]}
          //   data={
          //     // [{ filename: searchFieldCtxFormatted }] || firstTenSubcategoryTracks
          //     [{ filename: searchFieldCtxFormatted }] || firstTenSubcategoryTracks
          //   }
          columns={columns}
          rowEvents={rowEvents}
          selectRow={selectRow}
          className="table"
        />
      </div>
    </>
  );
}
