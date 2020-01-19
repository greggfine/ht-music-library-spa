import React from "react";
import Badge from "react-bootstrap/Badge";
import Volume from "../Volume/Volume";

export default function ControlsPanel({
  paused,
  handlePlayPause,
  handleStop,
  currentTrack,
  subcategoryTracks,
  handleSetVolume
}) {
  return (
    <div className="controls-badge-wrapper">
      {/* NEED TO DISABLE CONTROL PANEL WHILE
        AUDIO FILE IS LOADING!!!!!!! */}
      <div className="controls">
        <i
          className={
            paused ? "fa fa-play fa-4x btn-play" : "fa fa-pause fa-4x btn-pause"
          }
          onClick={handlePlayPause}
        ></i>

        <i className="fa fa-stop fa-4x btn-stop" onClick={handleStop}></i>

        <a
          href={`/audio/${currentTrack}`}
          id="downloader"
          download={currentTrack}
        >
          <i className="fa fa-download fa-4x download-icon"></i>
        </a>
      </div>
      <Volume handleSetVolume={handleSetVolume} />
      <h4>
        <Badge className="results-badge" variant="info">
          {subcategoryTracks.length} Results
        </Badge>
      </h4>
    </div>
  );
}
