/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import doctorLogin from './screens/doctorLogin';
import doctorSignup from './screens/doctorSignup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="doctor-login">
        <Stack.Screen name="Doctor-Login" component={doctorLogin} />
        <Stack.Screen name="Doctor-Signup" component={doctorSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
