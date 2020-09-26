import React from 'react'

class AlbumShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAlbum();
        this.props.getSongs();
        console.log("got albums and songs")
    }

    //loads this page => hey nothing is here => componentMounts
    render(){
        debugger
        if(!this.props.songs[0]){
            console.log("this piece is hittin");
            return null
        }

        console.log("WHY")
        let songs = this.props.songs.map(song => {
            return (
                <li key={song.id}>
                    {song.title}<audio src={song.trackUrl} controls></audio>{this.props.album.name}{song.runtime}
                </li>
            )
        })

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