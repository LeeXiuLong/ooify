import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from './albums_reducer';
import SongsReducer from './songs_reducer';
import PlaylistsReducer from './playlist_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    artists: ArtistsReducer,
    albums: AlbumsReducer,
    songs: SongsReducer,
    playlists: PlaylistsReducer
})

export default EntitiesReducer;