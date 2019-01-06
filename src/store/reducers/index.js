import {combineReducers} from 'redux';

import PrevMatch from '../../features/prev_match/store/reducers/prev_match_reducer';
import NextMatch from '../../features/next_match/store/reducers/next_match_reducer';
import Teams from '../../features/teams/store/reducers/teams_reducer';

const rootReducer = combineReducers({
    PrevMatch, NextMatch, Teams
});

export default rootReducer;