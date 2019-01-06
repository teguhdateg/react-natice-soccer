import axios from 'axios';
import {TEAMS} from '../constant/types';

export const fetchTeam = () => async (dispatch, getState) => {
    const {TeamsMatch} = getState();
    try {
         const request = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
         const response = await axios.get(request, {}, {timeout: 60});
         dispatch(setDataTeams({...TeamsMatch, ...response.data}));
    } catch (e) {
        console.log(e);
    }
}

const setDataTeams = (data) => ({
    type: TEAMS,
    payload: data
});