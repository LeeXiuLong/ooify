import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { getAlbum, getArtistDisco } from './actions/album_actions';
import { getArtist } from './actions/artist_actions';
import { getAlbumTracks } from './actions/song_actions'

document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if(window.currentUser){
        const preloadedState = {
            entities:{
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store= configureStore();
    }

    const root = document.getElementById("root");

    //For Testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getArtist = getArtist;
    window.getAlbum = getAlbum;
    window.getArtistDisco = getArtistDisco;
    window.getAlbumTracks = getAlbumTracks;
    //EndTesting

    ReactDOM.render(<Root store={store} />, root);
});