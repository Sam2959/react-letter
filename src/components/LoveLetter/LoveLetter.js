import React, { useState, useRef, useEffect } from "react";
import "./LoveLetter.css";
import audioFile from "./The-Love-Bug-Has-Bitten.mp3";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpenLetter();
    }, 1000); // Open the envelope after 1 second (1000 milliseconds)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => console.log("Playback succeeded"))
          .catch((e) => console.error("Playback failed:", e));
      }
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
