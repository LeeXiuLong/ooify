import React from 'react';
import { connect } from 'react-redux';
import PlaylistFormContainer from './playlists/playlist_form_container';
import AddPlaylistSong from './playlists/add_playlist_song';

class PlaylistModal extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.modal){
            return null;
        } else if (this.props.modal === "makePlaylist"){
            return (
                <div className="modal-background">
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <PlaylistFormContainer />
                    </div>
                </div>
            )
        } else if (this.props.modal === "addToPlaylist"){
            return(
                <div className="modal-background">
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <AddPlaylistSong />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return{
        modal: state.ui.modal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);