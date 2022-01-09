// Action Creators
export function fetchAstronauts() {
  return async function (dispatch) {
    dispatch({ type: "astronauts/astronautsLoading" });
    const res = await fetch("http://api.open-notify.org/astros.json");
    const astros = await res.json();
    dispatch({
      type: "astronauts/astronautsLoaded",
      payload: astros.people,
    });
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle", //loading status for fetch
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}
