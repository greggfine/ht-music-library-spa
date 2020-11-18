import React, { createContext, useState } from "react";

export const SearchFieldCtx = createContext();

export const SearchFieldProvider = props => {
  const [searchFieldInput, setSearchFieldInput] = useState("");
  const [searchFieldTrackResult, setSearchFieldTrackResult] = useState("");
  const handleSearchFieldInput = e => {
    setSearchFieldInput(e.target.value);
  };
  const handleSearchSubmit = async e => {
    e.preventDefault();
    // const tracks = await fetch(`/tracks/search/${searchFieldInput}`);
    const searchFieldInputFormatted = searchFieldInput
      .toLowerCase()
      .replace(/\s/g, "");
    const tracks = await fetch(`/tracks/search/${searchFieldInputFormatted}`);
    const tracksJSON = await tracks.json(); //[{...}]
    // console.log(tracksJSON);
    await setSearchFieldTrackResult(tracksJSON);
    setSearchFieldInput("");
  };
  return (
    <SearchFieldCtx.Provider
      value={{
        handleSearchFieldInput,
        handleSearchSubmit,
        searchFieldTrackResult,
        setSearchFieldTrackResult,
        searchFieldInput
      }}
    >
      {props.children}
    </SearchFieldCtx.Provider>
  );
};
