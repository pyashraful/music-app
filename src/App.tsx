import React, { useState, useRef } from "react";

//style
import "./style/app.scss";
// components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

// data
import data from "./data";

function App() {
  //library satae
  const [libraryStatus, setLibraryStatus] = useState(false);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // audioRef
  const audioRef = useRef(null);

  // time state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
