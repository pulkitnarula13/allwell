
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Doctor-Home'
import Connect from '../screens/Doctor-connect'
import History from '../screens/Doctor-History'
import Profile from '../screens/Doctor-Profile'








const Bottomnavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'Home'},
    { key: 'connect', title: 'Connect', focusedIcon: 'album' },
    { key: 'history', title: 'History', focusedIcon: 'clock' },
    { key: 'profile', title: 'Profile', focusedIcon: 'profile', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    connect: Connect,
    history: History,
    profile:Profile
  });

  return (
    <BottomNavigation barStyle={{ backgroundColor: '#DADADA' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Bottomnavigation;