import React from 'react';
import { connect } from 'react-redux';
import PlaylistFormContainer from './playlists/playlist_form_container';

class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.modal){
            return null;
        }

        return (
            <div className="modal-background">
                <div className="modal" onClick={e=> e.stopPropagation()}>
                    <PlaylistFormContainer />
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);