import axios from 'axios';
import {PREV_MATCH} from '../constants/types';

export const fetchPrevMatch = () => async (dispatch, getState) => {
    const {PrevMatch} = getState();
    try {
         const request = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328';
         const response = await axios.get(request, {}, {timeout: 60});
         dispatch(setDataPrevMatch({...PrevMatch, ...response.data}));
    } catch (e) {
        console.log(e);
    }
}

const setDataPrevMatch = (data) => ({
    type: PREV_MATCH,
    payload: data
});