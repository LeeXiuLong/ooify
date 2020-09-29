import React from 'react';
import { Link } from 'react-router-dom';

class SongItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="song-item">
                <div className="title-artist">
                    <p className="title">{this.props.song.title}</p>
                    <Link className="artist" to={`/artists/${this.props.song.artist_id}`}>{this.props.artist}</Link>
                </div>
                <Link className="album-name" to={`/albums/${this.props.song.album_id}`}>{this.props.album}</Link>
                <audio src={this.props.song.trackUrl} controls></audio>
                <p>{this.props.song.runtime}</p>
                <button onClick={this.props.openModal}>Add To Playlist</button>
            </div>
        )
    }
}

export default SongItem;