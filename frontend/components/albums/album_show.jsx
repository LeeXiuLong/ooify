import React from 'react'
import { clearSongs } from '../../actions/song_actions';
import SongItem from '../songs/SongItem';
import HomeAuthContainer from '../homeAuth/home_auth_container'

class AlbumShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.getSongs()
            .then(() => this.props.getAlbum());
        this.props.getUserPlaylists(this.props.currentUserId);
    }
    
    componentWillUnmount() {
        this.props.clearAlbums();
        this.props.clearSongs();
    }

    render(){
        if (this.props.songs.length < 1 || !this.props.songs[0] || !this.props.album || !this.props.artist){
            return null
        }

        let songs = this.props.songs.map(song => {
            let openModalProps = {
                type: "addToPlaylist",
                song: song
            }
            return (
                <li key={song.id}>
                    <SongItem 
                        key={song.id} 
                        song={song} 
                        artist={this.props.artist} 
                        album={this.props.album.name} 
                        openModal={()=> this.props.openModal(openModalProps)} 
                        closeModal={this.props.closeModal}
                        selectSong = {this.props.selectSong}
                    />
                </li>
            )
        })

        return (
            <div className="album-show">
                <div className="album-show-header">
                    <div className="album-artwork-and-title">
                        <img className="albumArtwork" src={this.props.album.artworkUrl} />
                        <h1 className="album-show-h1">{this.props.album.name}</h1>
                    </div>
                    <HomeAuthContainer />
                </div>
                <div className="album-show-main">
                    <div className="song-headers">
                        <p>TITLE</p>
                        <p>ALBUM</p>
                        <p><i className="fas fa-clock"></i></p>
                    </div>
                    <hr />
                    <ul className="album-show-song-items">
                        {songs}
                    </ul>
                </div>
            </div>
        )

    }
}

export default AlbumShow;