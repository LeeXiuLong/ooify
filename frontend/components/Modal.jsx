import React from 'react';
import { connect } from 'react-redux';
import PlaylistFormContainer from './playlists/playlist_form_container';
import AddPlaylistSongContainer from './playlists/add_playlist_song_containter';

class PlaylistModal extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.type){
            return null;
        } else if (this.props.type === "makePlaylist"){
            return (
                <div className="modal-background">
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <PlaylistFormContainer />
                    </div>
                </div>
            )
        } else if (this.props.type === "addToPlaylist"){
            return(
                <div className="modal-background-add-playlist">
                    <div className="modal-add-playlist" onClick={e => e.stopPropagation()}>
                        <AddPlaylistSongContainer />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return{
        type: state.ui.modal.type,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);