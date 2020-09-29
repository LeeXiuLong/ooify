import React from 'react'
import { clearSongs } from '../../actions/song_actions';
import SongItem from '../songs/SongItem';

class AlbumShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.getSongs()
            .then(() => this.props.getAlbum());
        console.log("got albums and songs")
    }

    componentWillUnmount() {
        this.props.clearSongs();
    }

    render(){
        if(this.props.songs.length < 1 || !this.props.songs[0] || !this.props.album){
            return null
        }

        let songs = this.props.songs.map(song => {
            return (
                <li key={song.id}>
                    <SongItem 
                        key={song.id} 
                        song={song} 
                        artist={this.props.artist} 
                        album={this.props.album.name} 
                        openModal={this.props.openModal} 
                        closeModal={this.props.closeModal}
                    />
                </li>
            )
        })

        return (
            <div>
                <h1>{this.props.album.name}</h1>
                <img className="albumArtwork" src={this.props.album.artworkUrl}/>
                <ul>
                    {songs}
                </ul>
            </div>
        )

    }
}

export default AlbumShow;