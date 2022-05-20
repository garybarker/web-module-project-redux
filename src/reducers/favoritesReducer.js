import * as actions from '../actions/favoritesActions'

const initialState = {
  movies: [],
  displayFavorites: false
}


const favorites = (state=initialState, action) => {
  switch(action.type) {
      
      default:
          return state;
  }
}

export default favorites;
