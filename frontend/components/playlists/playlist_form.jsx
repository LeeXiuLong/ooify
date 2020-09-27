import React from 'react';

class PlaylistForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name = "",
            user_id = this.props.currentUser
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.props.closeModal}>X</button>
                <div>Make a Playlist Here!</div>
                <form>
                    <label>
                        Playlist Name
                    </label>
                    <input 
                        type="text"
                    />
                    <button onClick={this.props.closeModal}>Cancel</button>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default PlaylistForm;