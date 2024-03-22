import { REGISTER, LOGIN, LOGOUT } from "../../constants/constants";

const initialState = {
  userData: [],
  isAuthenticated: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case LOGIN:
      const loginData = action.payload;
      const userFound = !!state.userData.find(
        (user) =>
          user.email === loginData.loginEmail &&
          user.password === loginData.loginPassword
      );
      const isAdmin =
        loginData.loginEmail === "admin@admin.com" &&
        loginData.loginPassword === "admin123";
      return {
        ...state,
        isAuthenticated: userFound || isAdmin,
        isAdmin: isAdmin,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
