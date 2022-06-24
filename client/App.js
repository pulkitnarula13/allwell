import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import Bottomnavigation from "./components/BottomNavigation";
import DoctorPatientSelection from "./screens/Doctor/Doctor-Patient-Selection";
import DoctorSignup from "./screens/Doctor/Doctor-Signup";
import DoctorLogin from "./screens/Doctor/Doctor-Login";
import Greeting from "./screens/Greeting";
import ForgotPassword from "./components/ForgotPassword";
import "react-native-gesture-handler";
import CustomNavigationBar from "./components/CustomNavigationBar";
import PatientSignup from "./screens/Patient/Patient-Signup";
import Medical_document from "./screens/Doctor/Medical_document";
import AvailableDoctor from "./screens/Doctor/Available-Doctor";
import DoctorWaitingList from "./screens/Doctor/Doctor-Waiting-List";

const Stack = createNativeStackNavigator();

export default function App() {

 
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Doctor-Waiting-List"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          {/* COMMON NAVIGATIONS STARTED */}
          <Stack.Screen name="Medical_document" component={Medical_document} />
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="BottomNavigation" component={Bottomnavigation} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen
            name="Doctor-Patient-Selection"
            component={DoctorPatientSelection}
          />

          {/* COMMON NAVIGATIONS ENDED */}

          {/* DOCTOR NAVIGATIONS STARTED*/}
          <Stack.Screen name="Doctor-Login" component={DoctorLogin} />
          <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
          <Stack.Screen name="Doctor-Waiting-List" component={DoctorWaitingList} />

          {/* DOCTOR NAVIGATIONS ENDED*/}

          {/* PATIENT NAVIGATIONS STARTED */}
          <Stack.Screen name="Patient-Signup" component={PatientSignup} />
          <Stack.Screen name="Available-Doctor" component={AvailableDoctor} />

          {/* PATIENT NAVIGATIONS ENDED */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
