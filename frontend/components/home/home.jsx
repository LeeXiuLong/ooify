import React from 'react';
import { Link } from 'react-router-dom';
import PlayBarContainer from '../playbar/playbar_container'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPlaylists(this.props.currentUserId);
    }

    render(){
        if(!this.props.playlists){
            return null;
        }

        let playlists = this.props.playlists.map(playlistObject => {
            return <Link className="playlist" key={playlistObject.playlist.id} to={`/playlists/${playlistObject.playlist.id}`}>{playlistObject.playlist.name}</Link>
        })
        
        return(
            <div className="nav-bar-play-bar">
                <div className="home-nav">
                    <Link to="/home">
                        <img src={window.white_logo} />
                    </Link>
                    <div className="links">
                        <a href="https://github.com/LeeXiuLong/" className="github">Github</a>
                        <a href="https://www.linkedin.com/in/jourdan-ooi/" className="linkedIn">LinkedIn</a>
                        <a href="https://docs.google.com/document/d/1gavjNXqdXnFg-yQLHhO-P1cHD0XEqvVLsIXPkuG0MJ8/edit?usp=sharing" className="resume">Resume</a>
                    </div>
                    <div className="playlists">
                        <p className="playlist-label">PLAYLISTS</p>
                        <button className="create-playlist" onClick={this.props.openModal}>
                            <i className="fas fa-plus"></i>
                            <p className="create-playlist-label">Create Playlist</p>
                        </button>
                    </div>

                    <hr/>

                    <ul className = "user-playlist-index">
                        {playlists}
                    </ul>
                </div>
                <PlayBarContainer />  
            </div>
        )
    }
}

export default Home;