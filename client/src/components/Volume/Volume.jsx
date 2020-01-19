import React from "react";
import "./Volume.styles.scss";

export default function Volume({ handleSetVolume }) {
  return (
    <div className="Volume">
      <input
        type="range"
        className="volume-slider"
        min="0"
        max="1"
        step=".01"
        onInput={handleSetVolume}
      />
      <i className="fa fa-volume-up speaker-icon"></i>
    </div>
  );
}
