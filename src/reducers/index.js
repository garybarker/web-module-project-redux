import { combineReducers } from 'redux';

import movies from './movieReducer';
import favorites from './favoritesReducer';




export default combineReducers({movies, favorites});