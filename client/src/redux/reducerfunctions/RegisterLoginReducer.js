import { API, getMethod } from "../../utils/axiosInstance/axiosInstance";

const initialState = {
  role: undefined,
  isAuth: false,
  roleDetails: {},
};

export function RegisterLoginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET-ROLE":
      const { userDetails, role, isAuth } = action.payload;
      localStorage.clear()
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("role", JSON.stringify(role));
      localStorage.setItem("roleDetails", JSON.stringify(userDetails));
    //   console.log(action.payload);
const newState = {...initialState,role:role,isAuth:isAuth,roleDetails:userDetails}
      return newState ;




    default:
      return state;
  }
}
