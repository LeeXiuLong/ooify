import React from 'react'
import { clearSongs } from '../../actions/song_actions';

class AlbumShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        //debugger
        this.props.getSongs()
            .then(() => this.props.getAlbum());
        console.log("got albums and songs")
    }

    componentWillUnmount() {
        this.props.clearSongs();
    }

    render(){
        if(this.props.songs.length < 1 || !this.props.songs[0] || !this.props.album){
            return null
        }

        let songs = this.props.songs.map(song => {
            //debugger
            return (
                <li key={song.id}>
                    {song.title}<audio src={song.trackUrl} controls></audio>{this.props.album.name}{song.runtime}
                </li>
            )
        })

        debugger
        return (
            <div>
                <h1>{this.props.album.name}</h1>
                <ul>
                    {songs}
                </ul>
            </div>
        )

    }
}

export default AlbumShow;