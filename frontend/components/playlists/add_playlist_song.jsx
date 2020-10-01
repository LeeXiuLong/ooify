import React from 'react';

export class AddPlaylistSong extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(playlistSong){
        this.props.addSongToPlaylist(playlistSong).then(this.props.closeModal());
    }

    componentDidMount(){
        this.props.getUserPlaylists(this.props.currentUserId);
    }

    render(){
        
        let playlists = this.props.playlists.map(playlist => {
            let playlistSong = {
                playlist_id: playlist.playlist.id,
                song_id: this.props.song.id
            }
            return <button key={playlist.playlist.id} onClick={() => this.handleClick(playlistSong)} className="add-playlist-label">{playlist.playlist.name}</button>            
        })

        //[button button button]
        let allButtons = [];
       for(let i = 0; i < playlists.length; i += 6){
            allButtons.push(<div className="button-divs-add-playlist">
                {playlists.slice(i,i+6)}
            </div>)
        }
        let openModalProps = {
            type: "makePlaylist",
            song: this.props.song
        }
        return(
                <form className="add-song-to-playlist-form">
                    <button className="playlist-form-x" onClick={this.props.closeModal}>X</button>
                    <h1 className="playlist-form-header">Add to playlist</h1>
                    <button className="make-new-playlist-and-add" onClick={() => this.props.openModal(openModalProps)}>New Playlist</button>
                    <div className="playlists-to-add-to">
                        {allButtons}
                    </div> 
                </form>
        )
    }
}

export default AddPlaylistSong