export const initialState = {
  characters: [],
  locations: [],
  episodes: [],
  favorites: [],
};

function storeReducer(state, action) {
  switch (action.type) {
    case "LOAD_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "LOAD_LOCATIONS":
      return {
        ...state,
        locations: action.payload,
      };
    case "LOAD_EPISODES":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.name !== action.payload)
      };
    default:
      return state;
  }
}

export default storeReducer;
