import {
    combineReducers
} from 'redux';

import errors from './error';
import auth from './auth';
import {
    currentPolls,
    polls
} from './polls';

export default combineReducers({
    errors,
    auth,
    polls,
    currentPolls
})