export const initialState = {
  isConnected: false,
  isLoading: false,
  email_verified: null,
  name: null,
  email: null,
  family_name: null
}


export default function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload
      };
    default:
      return initialState
  }
}