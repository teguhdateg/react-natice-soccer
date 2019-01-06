import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import ConfigureStore from '../store/configureStore';

// import screen layout
import PrevMatchScreen from '../features/prev_match';
import NextMatchScreen from '../features/next_match';
import TeamsScreen from '../features/teams';

const store = ConfigureStore();
export function registerScreen () {
    Navigation.registerComponentWithRedux('PrevMatchScreen', () => PrevMatchScreen, Provider, store);
    Navigation.registerComponentWithRedux('NextMatchScreen', () => NextMatchScreen, Provider, store);
    Navigation.registerComponentWithRedux('TeamsScreen', () => TeamsScreen, Provider, store);
}