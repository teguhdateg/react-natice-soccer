import {Navigation} from 'react-native-navigation';

// import screen layout
import PrevMatchScreen from '../features/prev_match';
import NextMatchScreen from '../features/next_match';
import TeamsScreen from '../features/teams';

export function registerScreen () {
    Navigation.registerComponent('PrevMatchScreen', () => PrevMatchScreen);
    Navigation.registerComponent('NextMatchScreen', () => NextMatchScreen);
    Navigation.registerComponent('TeamsScreen', () => TeamsScreen);
}