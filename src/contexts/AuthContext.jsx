import React, { createContext, useReducer, useMemo, useContext, useEffect } from 'react';
import { getProfile } from '~/api/auth';  // Đảm bảo bạn có API lấy thông tin người dùng
import authReducer from '~/reducers/AuthReducer';

// Đặt giá trị ban đầu của state
export const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const AuthContext = createContext({
    authState: initialState,
    dispatch: () => null,
});

const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const fetchUser = async () => {
                try {
                    const response = await getProfile();
                    dispatch({ type: 'SET_USER', payload: { user: response.metadata } });
                } catch (err) {
                    console.error("Error fetching user profile:", err);
                }
            };
            fetchUser();
        }
    }, [authState.token]);

    const contextValue = useMemo(() => ({ authState, dispatch }), [authState, dispatch]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuthContext };
