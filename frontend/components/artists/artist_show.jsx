import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from '../albums/album_index_item'
import HomeAuthContainer from '../homeAuth/home_auth_container'

class ArtistShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getArtist();
        this.props.getArtistDisco();
    }

    render(){
        if (!this.props.albums[0]) {
            return null;
        }
        let albumItems = this.props.albums.map(album => {
            return <AlbumIndexItem key={album.id} album={album} />
        })

        let allAlbumItems = [];
        for (let i = 0; i < albumItems.length; i += 6) {
            allAlbumItems.push(<div className="album-item-section">
                {albumItems.slice(i, i + 6)}
            </div>);
        }

        let backgroundStyle = {
            backgroundImage: `url(${this.props.artist.proPicUrl})`
        }

        return(
            <div className="artist-show">
                <div className="artist-show-header" style={backgroundStyle}>
                    <h1>{this.props.artist.name}</h1>
                    <HomeAuthContainer />
                </div>
                <div className="album-index-main">
                    <ul className="album-index-items">
                        {allAlbumItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArtistShow;