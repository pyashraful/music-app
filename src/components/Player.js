import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ setSongs, setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, timeUpdateHandler}) => {


  useEffect(() => {
    const newSongs = songs.map((song) => {
      if(song.id === currentSong.id){
        return{
          ...song,
          active: true
        }
      }else{
        return{
          ...song,
          active: false
        }
      }
    });
    setSongs(newSongs);
    if(isPlaying) audioRef.current.play()
  }, [currentSong])

  const playSongHandler = () => {
    if(!isPlaying){
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }else{
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  }



  const getTime = (time) => {
    return(
      Math.floor(time /60) + ":" + ("0"+ Math.floor(time%60)).slice(-2)
    )
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
  }

  // Skip Tack

  const skipTrackHandler = async (driection) => {
    let currentIndex = songs.findIndex( (song) => song.id === currentSong.id )
    if(driection === 'skip-forward'){
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      // if(isPlaying) audioRef.current.play()

    }
    if(driection === 'skip-back'){
      if((currentIndex - 1) % songs.length === -1){
        await setCurrentSong(songs[songs.length -1]);
        if(isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      if(isPlaying) audioRef.current.play();
    }



  }



  return(
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min="0" max={songInfo.duration || 0} onChange={dragHandler} value={songInfo.currentTime} type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon onClick={() => {skipTrackHandler('skip-back')}} className='skip-back' size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={isPlaying ?faPause: faPlay} />
        <FontAwesomeIcon onClick={() => {skipTrackHandler('skip-forward')}} className=' skip-forward' size='2x' icon={faAngleRight} />
      </div>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )

}

export default Player;