import React from 'react';
import { Link } from 'react-router-dom';

class SongItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            show:false,
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e){
        this.setState({show: false})
    }

    handleClick(){
        this.setState({show: !this.state.show})
        console.log(this.state.show)
    }

    render(){
        let removeButton;
        let createdAt;
        if (this.props.removeSongFromPlaylist){
            removeButton = <li className="delete-song" onClick={this.props.removeSongFromPlaylist}>Delete Song</li>
            createdAt = <p className="created-at">{this.props.playlistSong.created_at.slice(0, 10)}</p>
        }else{
            removeButton = <div></div>
            createdAt = <div></div>
        }

//
        return(
            <div className="song-item">
                <div className="title-artist">
                    <button onClick={() => this.props.selectSong(this.props.song)} className="title">{this.props.song.title}</button>
                    <Link className="artist" to={`/artists/${this.props.song.artist_id}`}>{this.props.artist}</Link>
                </div>
                <Link className="album-name" to={`/albums/${this.props.song.album_id}`}>{this.props.album}</Link>
                <audio className="audio" src={this.props.song.trackUrl} controls></audio>
                {createdAt}
                <div className="clock-and-dropdown">
                    <p className="runtime">{this.props.song.runtime}</p>
                    <div>
                        <button 
                            className="dropdown-songs-button" 
                            onBlur={this.handleBlur} 
                            onClick={this.handleClick}
                        >...
                            {this.state.show ? (
                                <ul
                                    onClick = {e=> e.stopPropagation()}
                                    className="add-and-delete-playlist"
                                >
                                    <li onClick={this.props.openModal}>
                                        Add To Playlist
                                    </li>
                                    {removeButton}
                                </ul>
                            ): null}
                        </button>
                    </div>
                    {/* <div className="dropdown-trigger-songs">
                        <button className="dropdown-songs-button">...</button>
                        <ul className="add-and-delete-playlist">
                            <li><button onClick={this.props.openModal}>Add To Playlist</button></li>
                            <li>{removeButton}</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default SongItem;