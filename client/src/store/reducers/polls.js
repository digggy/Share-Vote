import {
    SET_POLLS,
    SET_CURRENT_POLL
} from '../actionsTypes';

export const polls = (state = [], action) => {
    switch (action.type) {
        case SET_POLLS:
            return action.polls;
        default:
            return state;
    }
}

export const currentPolls = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_POLL:
            return action.poll;
        default:
            return state;
    }
}