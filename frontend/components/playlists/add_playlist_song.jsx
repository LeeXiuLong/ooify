import React from 'react';

export class AddPlaylistSong extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form className="make-playlist-form">
                    <button className="playlist-form-x" onClick={this.props.closeModal}>X</button>
                    <h1 className="playlist-form-header">Add to playlist</h1>
                    <button onClick={this.props.newPlaylistModal}>New Playlist</button>
                </form>
            </div>
        )
    }
}

export default AddPlaylistSong