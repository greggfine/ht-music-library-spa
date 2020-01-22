import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import WaveSurfer from "wavesurfer.js";
import "./Wave.styles.scss";
import waveContainerData from "../waveContainerData";
import ControlsPanel from "../ControlsPanel/ControlsPanel";

let waveformContainerPromise;

const Wave = ({ currentTrack, subcategoryTracks }) => {
  const [paused, togglePause] = useState(true);
  const [isLoading, toggleIsLoading] = useState(false);

  useEffect(() => {
    const createWaveformContainer = async () =>
      await WaveSurfer.create(waveContainerData);
    waveformContainerPromise = createWaveformContainer();
  }, []);

  useEffect(() => {
    const loadTrackIntoWaveform = async () => {
      toggleIsLoading(true);
      const waveform = await waveformContainerPromise;
      await waveform.load(`/audio/${currentTrack}`);
      waveform.on("ready", () => {
        toggleIsLoading(false);
      });
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
      {isLoading && (
        <Spinner
          animation="grow"
          role="status"
          className="loading-spinner"
          variant="success"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <div id="waveform" className="waveform"></div>
      <div className="badge-controlpanel-wrapper">
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
    </div>
  );
};

export default Wave;
