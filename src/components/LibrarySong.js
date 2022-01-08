import React from 'react';



const LibrarySong = ({song, songs,setSongs, setCurrentSong, audioRef, id, isPlaying}) => {
  const setSongHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id)
    await setCurrentSong(selectedSong[0]);
    if(isPlaying) audioRef.current.play()

    const newSongs = songs.map((song) => {
      if(song.id === id){
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

  }
  return(
    <div onClick={setSongHandler} className={`library-song  ${song.active ? 'selected' : ""} `}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4> { song.artist } </h4>
      </div>
    </div>
  )
}

export default LibrarySong;