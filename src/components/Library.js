import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            songs={songs}
            isPlaying={isPlaying}
            song={song}
            audioRef={audioRef}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
