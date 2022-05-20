import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import moviesData from './../data.js';
import { combineReducers } from 'redux';


const initialState = {
    movies: moviesData,
    appTitle: "IMDB Movie Database"
}




const movies = (state=initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const movie = action.payload
            state.movies.push(movie);
            return state
        default:
            return state;
    }
}

export default movies