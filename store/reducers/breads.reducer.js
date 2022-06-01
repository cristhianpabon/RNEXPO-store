// import { BREADS } from "../../data/breads";
import { SELECT_BREAD, FILTERED_BREAD, GET_BREAD } from "../actions/bread.action";

const initialState = {
  breads: null,
  filteredBread: [],
  selected: null,
};

const BreadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BREAD:
      console.log("GET_BREAD");
      console.log("HOLA" + action.payload);
      return {
        ...state,
        breads: action.payload
      };
    case SELECT_BREAD:
      console.log("SELECT_BREAD " + action.breadID);
      return {
        ...state,
        selected: state.breads.find((bread) => bread.id === action.breadID),
      };
    case FILTERED_BREAD:
      console.log("FILTERED_BREAD " + action.categoryID);
      return {
        ...state,
        filteredBread: state.breads.filter(
          (bread) => bread.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default BreadsReducer;
