import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PlaylistForm from './playlists/playlist_form';
import { makePlaylist } from '../actions/playlist_actions'

class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.modal){
            return null;
        }

        return (
            <div>
                <div className="modal" onClick={e=> e.stopPropagation()}><PlaylistForm closeModal={this.props.closeModal}/></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        modal: state.ui.modal,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        makePlaylist: playlist => dispatch(makePlaylist(playlist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);