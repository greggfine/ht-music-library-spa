import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import genres from "../../genres";
import Track from "../Track/Track";

import "./Search.styles.scss";

export default function Search() {
  const [tracks, setTracks] = useState([]);
  const [genre, changeGenre] = useState("rock");
  useEffect(() => {
    async function fetchData() {
      const tracks = await fetch(`/tracks/${genre}`);
      const tracksJSON = await tracks.json();
      setTracks(tracksJSON);
    }
    fetchData();
  }, [genre]);
  const handleChange = e => changeGenre(e.target.value);

  return (
    <div>
      <Select value={genre} onChange={handleChange}>
        {genres.map(genre => {
          return (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          );
        })}
      </Select>
      <List>
        {tracks
          .filter((t, i) => i < 10)
          .map(t => {
            return <Track {...t} key={t._id} />;
          })}
      </List>
    </div>
  );
}
