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
            return <li>
                <Link to="/">
                    <img src={`${album.artworkURL}`} alt=""/>
                </Link>
            </li>
        })
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.artist.name}</h1>
                <img src={`${this.props.artist.proPicUrl}`} />
                <ul>
                    {albumLinks}
                </ul>
            </div>
        )
    }
}

export default ArtistShow;