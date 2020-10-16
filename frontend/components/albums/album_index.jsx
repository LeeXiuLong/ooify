import React from 'react';
import AlbumIndexItem from './album_index_item'
import HomeAuthContainer from '../homeAuth/home_auth_container'

class AlbumIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAlbums();
    }

    render(){
        if(!this.props.albums[0]){
            return null;
        }
        let albumItems = this.props.albums.map(album => {
            return <AlbumIndexItem key={album.id} album={album} />
        })

        let allAlbumItems= [];
        for(let i = 0; i < albumItems.length; i+=6){
            allAlbumItems.push(<div className="album-item-section">
                {albumItems.slice(i,i+6)}
            </div>);
        }

        return(
            <div className="album-index">
                <div className="album-index-header">
                    <h1>Albums</h1>
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

export default AlbumIndex;