import React, { useState, useEffect, useContext } from "react";
import Tracks from "./Tracks/Tracks";
import { CategoriesCtx } from "../components/CategoriesProvider";

const TracksHOC = () => {
  const [tracks, setTracks] = useState([]);
  const categoriesCtx = useContext(CategoriesCtx);

  useEffect(() => {
    const fetchTracks = async () => {
      let tracks;
      const URL = categoriesCtx.currentSubcategoryArr.reduce((accum, genre) => {
        return `${accum}${genre}&`;
      }, "");
      const removeLastAmpersandURL = URL.slice(0, URL.length - 1);
      !removeLastAmpersandURL
        ? (tracks = await fetch(`/tracks/jazz`))
        : (tracks = await fetch(`/tracks/${removeLastAmpersandURL}`));
      const tracksJSON = await tracks.json();
      setTracks(tracksJSON);
    };
    fetchTracks();
  }, [categoriesCtx.currentSubcategoryArr]);

  return tracks ? <Tracks subcategoryTracks={tracks} /> : "Loading...";
};

export default TracksHOC;
