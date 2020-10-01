import React from 'react';
import SongItem from '../songs/SongItem';
import HomeContainer from '../home/home_container'
import Home from '../home/home';

class PlaylistShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPlaylist(this.props.playlistId);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.playlistId !== prevProps.match.params.playlistId){
            this.props.getPlaylist(this.props.playlistId);
        }
    }
    
    render(){
        let dontRender = Object.values(this.props.albums).some(album=>{
            return typeof album === 'object'
        })
        if(!this.props.playlist || dontRender || !this.props.songs || !this.props.albums){
            return null;
        }

        

        let song_item_props = this.props.songs.map(song => {
            let playlistSong = Object.values(this.props.playlistSongs).find(playlistSong => {
                return song.id === playlistSong.song_id;
            })
            return {
                song,
                artist: this.props.artists[song.artist_id],
                album: this.props.albums[song.album_id],
                playlistSong,
            }
        })
        let songItems = song_item_props.map(song => {
            let openModalProps = {
                type: "addToPlaylist",
                song: song.song,
            }
            let playlistSongId = song.playlistSong.id
            return <div key={song.song.id}>
                        <SongItem
                            song={song.song}
                            artist={song.artist}
                            album={song.album}
                            playlistSong={song.playlistSong}
                            openModal={() => this.props.openModal(openModalProps)}
                            removeSongFromPlaylist={()=>this.props.removeSongFromPlaylist(playlistSongId)}
                        />
                    </div>
        })
        return(
            <div className="playlist-show">
                <div className="playlist-show-header">
                    <p>PLAYLIST</p>
                    <h1>
                        {this.props.playlist.playlist.name}
                    </h1>
                    <p>{this.props.currentUser.name}</p>
                </div>
                <div className="main-songs">
                    <div className="song-headers">
                        <p>TITLE</p>
                        <p>ALBUM</p>
                        <p>DATE ADDED</p>
                        <p>CLOCK</p>
                    </div>
                    <hr/>
                    <ul className="song-items">
                        {songItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PlaylistShow;
