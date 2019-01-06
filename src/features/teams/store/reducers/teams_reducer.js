import {TEAMS} from '../constant/types';

const initialState = {
    teams: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEAMS:
        return {...state, ...action.payload};
    default:
        return state;
    }
}