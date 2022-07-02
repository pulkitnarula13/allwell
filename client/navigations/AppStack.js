import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../components/CustomNavigationBar";
import Bottomnavigation from "../components/BottomNavigation";
import AvailableDoctor from "../screens/Patient/Available-Doctor";
import PatientHome from "../screens/Patient/Patient-Home";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      {/* COMMON NAVIGATIONS STARTED */}
      <Stack.Screen name="Home" component={Bottomnavigation} />
      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen name="Available-Doctor" component={AvailableDoctor} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />

      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;