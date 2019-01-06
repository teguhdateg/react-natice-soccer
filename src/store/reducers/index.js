import {combineReducers} from 'redux';

import PrevMatch from '../../features/prev_match/store/reducers/prev_match_reducer';

const rootReducer = combineReducers({
    PrevMatch
});

export default rootReducer;