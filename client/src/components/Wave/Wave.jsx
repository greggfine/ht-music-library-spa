import React, { useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import "./Wave.styles.scss";
let waveformContainerPromise;

const Wave = ({ currentTrack }) => {
  const [paused, togglePause] = useState(true);
  useEffect(() => {
    const createWaveformContainer = async () => {
      const waveformContainer = await WaveSurfer.create({
        container: "#waveform",
        progressColor: "rgb(68,89,66)",
        waveColor: "grey",
        cursorColor: "#999999",
        height: 94,
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
      <div className="controls">
        <i
          className={
            paused ? "fa fa-play fa-4x btn-play" : "fa fa-pause fa-4x btn-pause"
          }
          disabled="disabled"
          onClick={handlePlayPause}
        ></i>

        <i
          className="fa fa-stop fa-4x"
          id="btn-stop"
          disabled="disabled"
          onClick={handleStop}
        ></i>

        <a
          href={`/audio/${currentTrack}`}
          id="downloader"
          download={currentTrack}
        >
          <i className="fa fa-download fa-4x download-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Wave;
