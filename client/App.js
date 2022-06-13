import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import doctorLogin from "./screens/Doctor-Login";
import doctorSignup from "./screens/Doctor-Signup";
<<<<<<< Updated upstream
import DoctorInfo from "./screens/Doctor-Info";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
=======
import Bottomtab from "./Components/Bottom-tab";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";

>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="doctor-login"
      >
<<<<<<< Updated upstream
        <Stack.Screen name="Doctor-Info" component={DoctorInfo} />
=======
        <Stack.Screen name="Bottom-tab" component={Bottomtab} />
>>>>>>> Stashed changes
        <Stack.Screen name="Doctor-Login" component={doctorLogin} />
        <Stack.Screen name="Doctor-Signup" component={doctorSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


