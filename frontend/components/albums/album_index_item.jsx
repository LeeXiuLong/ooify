import React from 'react';
import { Link } from 'react-router-dom'

class AlbumIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="album-index-item">
                <Link to={`/albums/${this.props.album.id}`}>
                    <img className="album-cover" src={this.props.album.artworkURL} />
                </Link>
                <h1 className="album-name">
                    {this.props.album.name}
                </h1>
            </div>
        )
    }
}

export default AlbumIndexItem;