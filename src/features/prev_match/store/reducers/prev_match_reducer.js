import {PREV_MATCH} from '../constants/types';

const initialState = {
    events: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PREV_MATCH:
        return {...state, ...action.payload};
    default:
        return state;
    }
}