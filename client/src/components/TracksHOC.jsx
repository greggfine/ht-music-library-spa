import React, { useState, useEffect } from "react";
import Tracks from "./Tracks/Tracks";

const TracksHOC = ({ currentSubcategory }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const tracks = await fetch(`/tracks/${currentSubcategory}`);
      const tracksJSON = await tracks.json();
      setTracks(tracksJSON);
    };
    fetchTracks();
  }, [tracks]);

  return tracks ? <Tracks subcategoryTracks={tracks} /> : "Loading...";
};

export default TracksHOC;
