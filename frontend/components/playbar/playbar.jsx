import React from 'react';

class PlayBar extends React.Component{
    constructor(props){
        super(props);

        this.audio = React.createRef()
        this.state ={ 
            currentlyPlaying: true,
        }

        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentlyPlaying !== this.props.currentlyPlaying){
            this.audio.currentlyPlaying ? this.audio.current.play() : this.audio.current.pause();
        }
        if(prevProps.selectedSong !== this.props.selectedSong){
            this.audio.current.play();
        }
    }

    togglePlay(){
        if(this.state.currentlyPlaying){
            this.audio.current.pause()
        }else{
            this.audio.current.play();
        }
        this.setState({ currentlyPlaying: !this.state.currentlyPlaying })
    } 

    render(){
        if(!this.props.selectedSong){
            return (
                <div className="play-bar">
                    
                </div>
            )
        }
        return (
            <div className="play-bar">
                <audio src={this.props.selectedSong.trackUrl} ref={this.audio} alt="current-playing-song"></audio>
                <button className="play-pause-button" onClick={this.togglePlay}>{this.state.currentlyPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
            </div>
        )
    }
}

export default PlayBar;