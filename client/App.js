import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import "react-native-gesture-handler";
//Common 
import CustomNavigationBar from "./components/CustomNavigationBar";
import Bottomnavigation from "./components/BottomNavigation";
import Greeting from "./screens/Common/Greeting";
import Login from "./screens/Common/Login";
import ForgotPassword from "./components/ForgotPassword";
// Doctor 
import DoctorPatientSelection from "./screens/Doctor/Doctor-Patient-Selection";
import DoctorSignup from "./screens/Doctor/Doctor-Signup";
import DoctorHome from "./screens/Doctor/Doctor-Home";
import DoctorConnect from "./screens/Doctor/Doctor-connect";
// Patients
import PatientSignup from "./screens/Patient/Patient-Signup";
import AvailableDoctor from "./screens/Patient/Available-Doctor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Doctor-Connect"

          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          {/* COMMON NAVIGATIONS STARTED */}
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="BottomNavigation" component={Bottomnavigation} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="PatientSignup" component={PatientSignup} />

          <Stack.Screen
            name="Doctor-Patient-Selection"
            component={DoctorPatientSelection}
          />
          <Stack.Screen name="Login" component={Login} />

          {/* COMMON NAVIGATIONS ENDED */}

          {/* DOCTOR NAVIGATIONS STARTED*/}
          <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
          <Stack.Screen name="Doctor-Home" component={DoctorHome} />
          <Stack.Screen name="Doctor-Connect" component={DoctorConnect} />

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
