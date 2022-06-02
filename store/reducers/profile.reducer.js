import {
  ADD_PROFILE,
  GET_PROFILE,
} from "../actions/profile.action";
// import Place from '../models/Place';

const initialState = {
  profile: null,
};

export default (state = initialState, action) => {
  console.log("Profile...");
  switch (action.type) {
    case ADD_PROFILE:
      console.log("ADD_PROFILE");
      // const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      //console.log(newPlace);
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILE:
      console.log("GET_PROFILE");
      // const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      //console.log(newPlace);
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
