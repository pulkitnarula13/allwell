import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../components/CustomNavigationBar";

import AvailableDoctor from "../screens/Patient/Available-Doctor";
import PatientHome from "../screens/Patient/PatientHome";
import ConnectDoctor from "../screens/Patient/Connect-Doctor";



const Stack = createNativeStackNavigator();

const AppStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      {/* COMMON NAVIGATIONS STARTED */}
      <Stack.Screen name="PatientHome" component={PatientHome} {...props} />
      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen name="Connect-Doctor" component={ConnectDoctor}{...props} />
      <Stack.Screen name="Available-Doctor" component={AvailableDoctor}{...props} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />

      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
