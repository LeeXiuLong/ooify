import { connect } from 'react-redux';
import PlayBar from './playbar';

const mapStateToProps = state => {
    return {
        selectedSong: state.ui.playbar.selectedSong,
        currentlyPlaying: state.ui.playbar.currentlyPlaying
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayBar)