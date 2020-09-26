import React from 'react';
import { Route } from 'react-router-dom';
import StillWorking from './still_working';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './sessionAuth/login_form_container';
import SignUpFormContainer from '../components/sessionAuth/signup_form_container'
import AuthRoute from '../util/route_util';
import ArtistShowContainer from './artists/artist_show_container';
import LoggedRoute from '../util/logged_route';
import AlbumShowContainer from './albums/album_show_container'

const App = () => {
    
    return (
        <div>
            <Route path="/stillWorking" component={StillWorking}/>
            <Route exact path ="/" component={SplashPage}/>
            <AuthRoute path = "/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <LoggedRoute path="/artists/:artistId" component={ArtistShowContainer} />
            <LoggedRoute path="/albums/:albumId" component={AlbumShowContainer} />
        </div>
    )
}

export default App;