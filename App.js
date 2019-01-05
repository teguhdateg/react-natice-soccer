
import {Navigation} from 'react-native-navigation';
import {registerScreen} from './src/utility/routers';
import homeScreen from './src/features';

registerScreen();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      backgroundColor: '#ffffff',
      style: 'dark'
    },
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait']
    }
  });
  homeScreen();
});