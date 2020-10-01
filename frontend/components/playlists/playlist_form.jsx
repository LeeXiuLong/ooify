import React from 'react';

class PlaylistForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            user_id: this.props.currentUserId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(){
        return e => this.setState({ name: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.song){
            this.props.makePlaylistWithSong(this.state, this.props.song)
                .then(this.props.closeModal());
        }else{
            this.props.makePlaylist(this.state)
                .then(this.props.closeModal());
        }
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="make-playlist-form">
                    <button className="playlist-form-x" onClick={this.props.closeModal}>X</button>
                    <h1 className="playlist-form-header">Create new playlist</h1>
                    <div className="playlist-input">
                        <label className="playlist-form-input-label">
                            Playlist Name
                        </label>
                        <input
                            type="text" 
                            className="playlist-form-input"
                            onChange={this.handleChange()}
                        />
                    </div>
                    
                    <div className="playlist-form-buttons">
                        <button className="playlist-cancel-button" onClick={this.props.closeModal}>CANCEL</button>
                        <button type="submit" className= "playlist-create-button">CREATE</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default PlaylistForm;