import React from 'react';

class PlaylistShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPlaylist();
    }

    render(){
        if(!this.props.playlist){
            return null;
        }
        return(
            <div>
                <h1>
                    {this.props.playlist.name}
                </h1>
            </div>
        )
    }
}

export default PlaylistShow;
