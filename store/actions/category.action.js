import { URL_API } from "../../constants/database";
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const GET_CATEGORY = 'GET_CATEGORY';

const orderByUserID = (data, user) => {
    const items = []
    Object.keys(data).forEach(key => items.push({id: key, ...data[key]}))
    //return items.filter(item => item.user === user)
    return items;
}

export const selectCategory = (id) => ({
    type: SELECT_CATEGORY,
    categoryID: id
})

export const getCategory = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/categories.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
    
            const result = await response.json()
            // console.log(result);
            const items = orderByUserID(result, 'user')
            dispatch({
                type: GET_CATEGORY,
                payload: items
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}