import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../components/CustomNavigationBar";
import Bottomnavigation from "../components/BottomNavigation";
import AvailableDoctor from "../screens/Patient/Available-Doctor";
import PatientHome from "../screens/Patient/Patient-Home";
import DoctorWaitingList from "../screens/Doctor/Doctor-Waiting-List";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import DoctorUrgent from "../screens/Doctor/Doctor-Urgent";


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
      <Stack.Screen name="AvailableDoctor" component={AvailableDoctor} />
      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}
      <Stack.Screen name="Doctor-Inbox" component={DoctorInbox} />
      <Stack.Screen name="Doctor-Waiting-List" component={DoctorWaitingList} />
      <Stack.Screen name="Doctor-Urgent" component={DoctorUrgent} />

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen name="Available-Doctor" component={AvailableDoctor} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />

      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
