import React, {useState, useRef} from 'react';

//style
import './style/app.scss';
// components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';

// data
import data from './data';






function App() {

  // audioRef
  const audioRef = useRef(null);

    // time state
    const [songInfo, setSongInfo] = useState({
      currentTime : 0,
      duration : 0,
    });

  //library satae
  const [libraryStatus, setLibraryStatus] = useState(false)

  // update time
  const timeUpdateHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime:current, duration});
  }



  const[songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong= {currentSong} />
      <Player setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} se timeUpdateHandler={timeUpdateHandler} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong ={currentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying}  songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} />
    </div>
  );
}

export default App;
