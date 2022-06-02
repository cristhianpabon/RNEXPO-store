import * as FileSystem from "expo-file-system";
import { URL_API } from "../../constants/database";
export const ADD_PROFILE = "ADD_PROFILE";
export const GET_PROFILE = "GET_PROFILE";

const orderByUserID = (data, user) => {
  const items = [];
  Object.keys(data).forEach((key) => items.push({ id: key, ...data[key] }));
  //return items.filter(item => item.user === user)
  return items;
};

export const addProfile = (user, email, image) => {
  return async (dispatch) => {
    console.log("ADD_PROFILE...");

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    console.log("------------------------------------");
    console.log(image);
    console.log(fileName);
    console.log(Path);
    console.log("------------------------------------");
    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({ type: ADD_PROFILE, payload: { user, email, image: Path } });
  };
};

export const getProfile = () => {
  return async (dispatch) => {
    console.log("GET_PROFILE...");
    try {
      const response = await fetch(`${URL_API}/profile.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
    //   console.log("RESULT!!");
    //   console.log(result);
      const items = orderByUserID(result, "user");
      dispatch({ type: GET_PROFILE, payload: items });
    } catch (error) {
      console.log(error.message);
    }
  };
};
