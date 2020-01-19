import React, { useState, useEffect, useContext } from "react";
import Tracks from "./Tracks/Tracks";
import { CategoriesCtx } from "../components/CategoriesProvider";

const TracksHOC = () => {
  const [tracks, setTracks] = useState([]);
  const categoriesCtx = useContext(CategoriesCtx);

  useEffect(() => {
    const fetchTracks = async () => {
      const tracks = await fetch(`/tracks/${categoriesCtx.currentSubcategory}`);
      const tracksJSON = await tracks.json();
      setTracks(tracksJSON);
    };
    fetchTracks();
  }, [tracks]);

  return tracks ? <Tracks subcategoryTracks={tracks} /> : "Loading...";
};

export default TracksHOC;
