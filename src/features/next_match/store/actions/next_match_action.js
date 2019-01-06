import axios from 'axios';
import {NEXT_MATCH} from '../constant/types';

export const fetchNextMatch = () => async (dispatch, getState) => {
    const {NextMatch} = getState();
    try {
         const request = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328';
         const response = await axios.get(request, {}, {timeout: 60});
         dispatch(setDataNextMatch({...NextMatch, ...response.data}));
    } catch (e) {
        console.log(e);
    }
}

const setDataNextMatch = (data) => ({
    type: NEXT_MATCH,
    payload: data
});