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
                {/* <p>{this.props.playlist_song.created_at}</p> */}
                <p>{this.props.song.runtime}</p>
            </div>
        )
    }
}

export default SongItem;