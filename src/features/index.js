import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

const homeScreen = () => {
    Promise.all([
        Icon.getImageSource('list', 16),
        Icon.getImageSource('trending-up', 16),
        Icon.getImageSource('users', 16)
    ]).then((sources) =>  {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                              children: [
                                {
                                  component: {
                                    name: 'PrevMatchScreen',
                                    passProps: { }
                                  }
                                }
                              ],
                              options: {
                                topBar: {
                                    visible: true,
                                    drawBehind: false,
                                    title: {
                                      text: 'Premier League',
                                      fontSize: 14,
                                      color: '#9F9F9F',
                                      fontFamily: 'Poppins-Regular'
                                    }
                                },
                                bottomTab: {
                                  text: 'Prev. Match',
                                  icon: sources[0],
                                  iconColor: '#9F9F9F',
                                  textColor: '#9F9F9F',
                                  selectedIconColor: '#4E4E4E',
                                  selectedTextColor: '#4E4E4E',
                                  fontFamily: 'Poppins-Regular',
                                  fontSize: 10, 
                                  selectedFontSize: 12
                                }
                              }
                            }
                        },
                        {
                            stack: {
                              children: [
                                {
                                  component: {
                                    name: 'NextMatchScreen',
                                    passProps: { }
                                  }
                                }
                              ],
                              options: {
                                topBar: {
                                    visible: true,
                                    drawBehind: false,
                                    title: {
                                      text: 'Premier League',
                                      fontSize: 14,
                                      color: '#9F9F9F',
                                      fontFamily: 'Poppins-Regular'
                                    }
                                },
                                bottomTab: {
                                  text: 'Next Match',
                                  icon: sources[1],
                                  iconColor: '#9F9F9F',
                                  textColor: '#9F9F9F',
                                  selectedIconColor: '#4E4E4E',
                                  selectedTextColor: '#4E4E4E',
                                  fontFamily: 'Poppins-Regular',
                                  fontSize: 10, 
                                  selectedFontSize: 12
                                }
                              }
                            }
                        },
                        {
                            stack: {
                              children: [
                                {
                                  component: {
                                    name: 'TeamsScreen',
                                    passProps: { }
                                  }
                                }
                              ],
                              options: {
                                topBar: {
                                    visible: true,
                                    drawBehind: false,
                                    title: {
                                      text: 'Premier League',
                                      fontSize: 14,
                                      color: '#9F9F9F',
                                      fontFamily: 'Poppins-Regular'
                                    }
                                },
                                bottomTab: {
                                  text: 'Teams',
                                  icon: sources[2],
                                  iconColor: '#9F9F9F',
                                  textColor: '#9F9F9F',
                                  selectedIconColor: '#4E4E4E',
                                  selectedTextColor: '#4E4E4E',
                                  fontFamily: 'Poppins-Regular',
                                  fontSize: 10, 
                                  selectedFontSize: 12
                                }
                              }
                            }
                        }                       
                    ]
                }
            }
        });
    });
}

export default homeScreen;