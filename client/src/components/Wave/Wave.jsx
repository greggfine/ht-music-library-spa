import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import WaveSurfer from "wavesurfer.js";
import "./Wave.styles.scss";
import waveContainerData from "../waveContainerData";
import ControlsPanel from "../ControlsPanel/ControlsPanel";

let waveformContainerPromise;

const Wave = ({ currentTrack, subcategoryTracks }) => {
  const [paused, togglePause] = useState(true);
  useEffect(() => {
    const createWaveformContainer = async () =>
      await WaveSurfer.create(waveContainerData);
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

  const handleSetVolume = async e => {
    e.persist();
    let waveform = await waveformContainerPromise;
    waveform.setVolume(e.target.value);
  };

  return (
    <div className="Wave">
      <div id="waveform" className="waveform"></div>
      <h3>
        <Badge className="current-track-title" variant="dark">
          {currentTrack.replace(/_HiddenTigerMusic.mp3/, "")}
        </Badge>
      </h3>
      <ControlsPanel
        paused={paused}
        handlePlayPause={handlePlayPause}
        handleStop={handleStop}
        currentTrack={currentTrack}
        subcategoryTracks={subcategoryTracks}
        handleSetVolume={handleSetVolume}
      />
    </div>
  );
};

export default Wave;
