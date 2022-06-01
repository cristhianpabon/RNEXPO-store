import { URL_API } from "../../constants/database.js";

export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTERED_BREAD = 'FILTERED_BREAD';
export const GET_BREAD = 'GET_BREAD';

export const selectBread = (id) => ({
    type: SELECT_BREAD,
    breadID: id,
}) 

export const filteredBread = (id) => ({
    type: FILTERED_BREAD,
    categoryID: id,
})

const orderByUserID = (data, user) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    //return items.filter(item => item.user === user)
    return items;
}

export const getBread = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/bread.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
    
            const result = await response.json()
            console.log(result);
            console.log("++++++++++++++");
            const items = orderByUserID(result, 'user')
            dispatch({
                type: GET_BREAD,
                payload: items
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}