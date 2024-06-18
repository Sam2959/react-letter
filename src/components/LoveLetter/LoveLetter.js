import React, { useState, useRef, useEffect } from "react";
import "./LoveLetter.css";
import audioFile from "./The-Love-Bug-Has-Bitten.mp3";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsFullSize(true);
      }, 800); // 800ms delay after opening the envelope

      // Start playing audio after 1 second
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => console.log("Playback succeeded"))
          .catch((e) => console.error("Playback failed:", e));
      }
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []); // This effect will run only once, on component mount

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div
      className={`envelope ${isOpen ? "open" : ""}`}
      onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}
    >
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? "fullSize" : ""}`}>
        mah dear kundanapu bomma <b>Maggi</b>❤️,
        <br />
        <br />
        "Hope your special day brings you all that your heart wishes and
        desires! Here's wishing you a day full of happiness! and smiles.
        <b>Happy birthday🎂!"... mah</b>
        <br />
        <br />
        Met you when I was not looking for you,
        <br />
        but lost you when I l....ed you the most...🙂:)
        <br />
        <br />
        Every rose has its thorns. Show me yours and I'll show you hands willing
        to bleed.
        <br />
        <br />
        Regards,
        <br />
        Yours stranger....
        <br />
        @saaaammmmm
        <br />
      </div>
      <audio
        ref={audioRef}
        src={audioFile}
        onError={(e) => console.error("Audio error:", e.message)}
        loop
      />
    </div>
  );
};

export default LoveLetter;
