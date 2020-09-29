import React from 'react';
import SongItem from '../songs/SongItem';

class PlaylistShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getPlaylist();
    }

    componentWillUnmount(){
        this.props.clearPlaylists();
    }

    render(){
        if(!this.props.playlist){
            return null;
        }
        // let song_item_props = this.props.songs.map(song => {
        //     let artist_name = 
        //     return {
        //         song: song,

        //     }
        // })
        // let songItems = song_item_props.map(song => {
        //     <SongItem song={song} />
        // })
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
