import {
    addError,
    removeError
} from './error';
import {
    SET_CURRENT_USER
} from '../actionsTypes';
import api from '../../services/api';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const setToken = token => {
    api.setToken(token);
};
export const logout = () => {
    return dispatch => {
        localStorage.clear();
        api.setToken(null);
        dispatch(setCurrentUser({}));
        dispatch(removeError());
    };
}
export const authUser = (path, data) => {
    return async dispatch => {
        try {
            const {
                token,
                ...user
            } = await api.call('post', `auth/${path}`, data);
            // Save the token reviced locally inoder to use it for furhter cases
            localStorage.setItem('jwtToken', token);
            // Set the token within the header of the api call
            api.setToken(token);
            // Dispatching actions
            dispatch(setCurrentUser(user));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error));
        }
    }
}