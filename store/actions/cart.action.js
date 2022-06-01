import { URL_API } from "../../constants/database";

export const SELECT_CART = "SELECT_CART";
export const GET_CART = "GET_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

const orderByUserID = (data, user) => {
  const items = [];
  Object.keys(data).forEach((key) => items.push({ id: key, ...data[key] }));
  //return items.filter(item => item.user === user)
  return items;
};

export const selectCart = (id) => ({
  type: SELECT_CART,
  cartID: id,
});

export const getCart = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/cart.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      // console.log(result);
      const items = orderByUserID(result, "user");
      dispatch({
        type: GET_CART,
        payload: items,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addItem = (item) => {
    console.log(item);
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/cart.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(), ...item
        }),
      });

      const result = await response.json();
      dispatch({
        type: ADD_ITEM,
        item,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeItem = (id) => {
  console.log("Borrando item del carrito...");
  console.log(id);
  return async (dispatch) => {
    try {
      await fetch(`${URL_API}/cart/${id}.json`, {
        method: "DELETE",
        headers: {
          "contetent-type": "application/json",
        },
      });
      dispatch({
        type: REMOVE_ITEM,
        itemID: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
// export const removeItem = itemID => ({
//     type: REMOVE_ITEM,
//     itemID,
// });

export const confirmCart = (payload, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
          total,
        }),
      });

      const result = await response.json();
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
