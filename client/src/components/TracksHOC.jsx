import React, { useState, useEffect, useContext } from "react";
import Tracks from "./Tracks/Tracks";
import { CategoriesCtx } from "../components/CategoriesProvider";
// import { SearchFieldCtx } from "../components/SearchFieldProvider";

const TracksHOC = () => {
  const [tracks, setTracks] = useState([]);
  const categoriesCtx = useContext(CategoriesCtx);
  //   const searchFieldCtx = useContext(SearchFieldCtx);

  useEffect(() => {
    const fetchTracks = async () => {
      let tracks;
      //   console.log(categoriesCtx.currentSubgenreArr); // ["downtempo"]
      //   console.log(categoriesCtx.currentSubcategoryArr); // ["electronic"]
      //   concat these to get ["downtempo, electronic"]
      const categoriesAndSubgenres = [
        ...categoriesCtx.currentSubgenreArr,
        ...categoriesCtx.currentSubcategoryArr
      ];
      //   const URL = categoriesCtx.currentSubcategoryArr.reduce((accum, genre) => {
      //     return `${accum}${genre}&`;
      //   }, "");

      const URL = categoriesAndSubgenres.reduce((accum, genre) => {
        return `${accum}${genre}&`;
      }, "");
      const removeLastAmpersandURL = URL.slice(0, URL.length - 1);
      !removeLastAmpersandURL
        ? (tracks = await fetch(`/tracks/jazz`))
        : (tracks = await fetch(`/tracks/${removeLastAmpersandURL}`));
      const tracksJSON = await tracks.json();
      setTracks(tracksJSON);
      //   searchFieldCtx.setSearchFieldTrackResult("");
    };
    fetchTracks();
  }, [categoriesCtx.currentSubcategoryArr, categoriesCtx.currentSubgenreArr]);

  return tracks ? <Tracks subcategoryTracks={tracks} /> : "Loading...";
};

export default TracksHOC;
