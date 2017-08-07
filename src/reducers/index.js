import { GET_IMAGES } from "../actions/actions";
import { combineReducers } from "redux";
import _ from "lodash";

const initialState = {
  images: {}
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case GET_IMAGES:
      newState.images = action.payload;
      return newState.images;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  images: reducer
});

export default rootReducer;
