import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getArtist();
        this.props.getArtistDisco();
    }

    render(){
        if(!this.props.artist || !this.props.albums){
            return null
        }
        
        let albumLinks = this.props.albums.map(album => {
            return <li key={album.id}>
                <Link to={`/albums/${album.id}`}>
                    <img className="albumArtwork" src={`${album.artworkURL}`} alt=""/>
                    <label>{album.name}</label>
                </Link>
            </li>
        })
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.artist.name}</h1>
                <img src={`${this.props.artist.proPicUrl}`} className ="artistProPic"/>
                <ul>
                    {albumLinks}
                </ul>
            </div>
        )
    }
}

export default ArtistShow;