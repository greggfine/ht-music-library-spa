import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import WaveSurfer from "wavesurfer.js";
import "./Wave.styles.scss";
let waveformContainerPromise;

const Wave = ({ currentTrack, subcategoryTracks }) => {
  const [paused, togglePause] = useState(true);
  useEffect(() => {
    const createWaveformContainer = async () => {
      const waveformContainer = await WaveSurfer.create({
        container: "#waveform",
        progressColor: "rgb(68,89,66)",
        waveColor: "grey",
        cursorColor: "#999999",
        height: 74,
        pixelRatio: 1,
        responsive: true
        // hideScrollbar: true
        // scrollParent: false
        // maxCanvasWidth: 300
      });
      return waveformContainer;
    };
    waveformContainerPromise = createWaveformContainer();
  }, []);

  useEffect(() => {
    const loadTrackIntoWaveform = async () => {
      const waveform = await waveformContainerPromise;
      await waveform.load(`/audio/${currentTrack}`);
    };
    loadTrackIntoWaveform();
  }, [currentTrack]);

  const handlePlayPause = async () => {
    const waveform = await waveformContainerPromise;
    await togglePause(!paused);
    paused ? waveform.play() : waveform.pause();
  };

  const handleStop = async () => {
    const waveform = await waveformContainerPromise;
    await waveform.stop();
    paused ? togglePause(paused) : togglePause(!paused);
  };

  return (
    <div className="Wave">
      <div id="waveform" className="waveform"></div>
      <h3>
        <Badge className="current-track-title" variant="dark">
          {currentTrack.replace(/_HiddenTigerMusic.mp3/, "")}
        </Badge>
      </h3>
      <div className="controls-badge-wrapper">
        <div className="controls">
          <i
            className={
              paused
                ? "fa fa-play fa-4x btn-play"
                : "fa fa-pause fa-4x btn-pause"
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
        <h4>
          <Badge className="results-badge" variant="info">
            {subcategoryTracks.length} Results
          </Badge>
        </h4>
      </div>
    </div>
  );
};

export default Wave;
