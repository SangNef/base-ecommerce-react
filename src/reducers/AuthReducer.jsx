export const initialState = {
    user: null,
    token: localStorage.getItem("accessToken") || null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
            };
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
}

export default authReducer;