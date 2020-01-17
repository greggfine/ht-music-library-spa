import React, { useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import "./Wave.styles.scss";
let waveformContainerPromise;

const Wave = ({ currentTrack }) => {
  useEffect(() => {
    const createWaveformContainer = async () => {
      const waveformContainer = await WaveSurfer.create({
        container: "#waveform",
        progressColor: "rgb(68,89,66)",
        waveColor: "grey",
        cursorColor: "#999999",
        height: 44,
        pixelRatio: 1,
        responsive: true,
        scrollParent: false
      });
      return waveformContainer;
    };
    waveformContainerPromise = createWaveformContainer();
  }, []);

  useEffect(() => {
    const loadTrackIntoWaveform = async () => {
      const waveform = await waveformContainerPromise;
      await waveform.load(`/audio/${currentTrack}`);
      waveform.on("ready", function() {
        waveform.play();
      });
    };
    loadTrackIntoWaveform();
  }, [currentTrack]);

  return (
    <div className="Wave">
      <div id="waveform"></div>
      <a
        href={`/audio/${currentTrack}`}
        id="downloader"
        download={currentTrack}
      >
        <i class="fa fa-download fa-4x download-icon"></i>
      </a>
    </div>
  );
};

export default Wave;
