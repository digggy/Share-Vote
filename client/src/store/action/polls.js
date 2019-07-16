import {
    SET_POLLS,
    SET_CURRENT_POLL
} from '../actionsTypes';
import {
    addError,
    removeError
} from './error';
import api from '../../services/api';

export const setPolls = polls => ({
    type: SET_POLLS,
    polls
})

export const setCurrentPoll = poll => ({
    type: SET_CURRENT_POLL,
    poll
})

// Get the all the polls
export const getPoll = () => {
    return async dispatch => {
        try {
            const polls = await api.call('get', 'polls');
            dispatch(setPolls(polls));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

// Get the polls by user
export const getUserPolls = () => {
    return async dispatch => {
        try {
            const polls = await api.call('get', 'polls/user');
            dispatch(setPolls(polls));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

// Create a new Poll
export const createPoll = data => {
    return async dispatch => {
        try {
            const poll = await api.call('post', 'polls', data);
            dispatch(setCurrentPoll(poll));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

// Get a poll by an id
export const getCurrentPoll = id => {
    return async dispatch => {
        try {
            const poll = await api.call('get', `polls/${id}`);
            dispatch(setCurrentPoll(poll));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}
// Vote a poll
export const vote = (path, data) => {
    return async dispatch => {
        try {
            const poll = await api.call('post', `polls/${path}`, data);
            dispatch(setCurrentPoll(poll));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));

        }
    }
}