// import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";
import { GET_CATEGORY } from "../actions/category.action";

const initialState = {
    // categories: CATEGORIES,
    categories: null,
    selected: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            console.log("GET_CATEGORY ");
            // console.log(action.payload);
            return {
                ...state,
                categories: action.payload
            }
        case SELECT_CATEGORY:
            console.log("SELECT_CATEGORY " + action.categoryID);
            const indexCategory = state.categories.findIndex(cat => cat.id===action.categoryID);
            if(indexCategory===-1) return state;
            return {...state, selected: state.categories[indexCategory]};
        default:
            return state;
    }    
} 

export default CategoryReducer;