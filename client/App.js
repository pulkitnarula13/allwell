import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import Bottomnavigation from "./components/BottomNavigation";
import DoctorPatientSelection from "./screens/Doctor/Doctor-Patient-Selection";
import DoctorSignup from "./screens/Doctor/Doctor-Signup";
import Greeting from "./screens/Common/Greeting";
import ForgotPassword from "./components/ForgotPassword";
import "react-native-gesture-handler";
import CustomNavigationBar from "./components/CustomNavigationBar";
import PatientSignup from "./screens/Patient/Patient-Signup";
import AvailableDoctor from "./screens/Patient/Available-Doctor";
import Login from "./screens/Common/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Doctor-Signup"

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
