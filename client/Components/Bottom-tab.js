import {View, Text} from 'react-native';
import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import DoctorInfoHome from '../screens/Doctor-Info-Home';
import DoctorInfoProfile from '../screens/DOctor-info-profile';
import DoctorInfoHistory from '../screens/Doctor-info-history';
import DoctorInfoConnect from '../screens/Doctor-info-connect';


const Bottomtab = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'profile', title: 'Profile', icon: 'clock' },
      { key: 'connections', title: 'Connect', icon: 'clock' },
      { key: 'history', title: 'History', icon: 'clock' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      home: DoctorInfoHome,
      profile: DoctorInfoProfile,
      connections: DoctorInfoConnect,
      history:DoctorInfoHistory
    });




    
  return (
    <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
  );
};

export default Bottomtab;