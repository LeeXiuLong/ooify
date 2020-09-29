import React from 'react';
import { Route } from 'react-router-dom';
import StillWorking from './still_working';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './sessionAuth/login_form_container';
import SignUpFormContainer from '../components/sessionAuth/signup_form_container'
import AuthRoute from '../util/route_util';
import ArtistShowContainer from './artists/artist_show_container';
import LoggedRoute from '../util/logged_route';
import AlbumShowContainer from './albums/album_show_container'
import PlaylistModal from './Modal.jsx';
import HomeContainer from './home/home_container'
import PlaylistShowContainer from './playlists/playlist_show_container';

const App = () => {
    
    return (
        <div>
            <PlaylistModal />
            <Route path="/stillWorking" component={StillWorking}/>
            <Route exact path ="/" component={SplashContainer}/>
            <AuthRoute path = "/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <LoggedRoute path="/artists/:artistId" component={ArtistShowContainer} />
            <LoggedRoute path="/albums/:albumId" component={AlbumShowContainer} />
            <LoggedRoute path="/home/:userId" component={HomeContainer} />
            <LoggedRoute path = "/playlists/:playlistId" component={PlaylistShowContainer} />
        </div>
    )
}

export default App;