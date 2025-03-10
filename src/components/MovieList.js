import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import * as actions from '../actions/movieActions'

const MovieList = (props)=> {
    const {movies} = props.movies
    

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map((movie, idx)=><MovieListItem key={idx} movie={movie} />)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

export default connect(st =>st, actions)(MovieList);