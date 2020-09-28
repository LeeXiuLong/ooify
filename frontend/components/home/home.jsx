import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let playlists = this.props.playlists.map(playlist => {
            return <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
        })
        return(
            <div>
                <button onClick={this.props.openModal}>
                    +Create Playlist
                </button>
                <ul>
                    {playlists}
                </ul>
            </div>
        )
    }
}

export default Home;