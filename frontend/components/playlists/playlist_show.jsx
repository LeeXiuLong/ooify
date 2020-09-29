import React from 'react';
import SongItem from '../songs/SongItem';

class PlaylistShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPlaylist();
    }

    componentWillUnmount(){
        this.props.clearPlaylists();
    }

    render(){
        if(!this.props.playlist){
            return null;
        }

        let song_item_props = this.props.songs.map(song => {
            return {
                song: song,
                artist: this.props.artists[song.artist_id],
                album: this.props.albums[song.album_id],
            }
        })
        let songItems = song_item_props.map(song => {
            return <SongItem 
                        key={song.song.id} 
                        song={song.song} 
                        artist={song.artist} 
                        album={song.album}
                        openModal={this.props.openModal}
                    />
        })
        return(
            <div>
                <h1>
                    {this.props.playlist.name}
                </h1>
                <ul className="song-items">
                    {songItems}
                </ul>
            </div>
        )
    }
}

export default PlaylistShow;
