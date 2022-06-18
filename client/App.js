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
import "react-native-gesture-handler";
import CustomNavigationBar from "./components/CustomNavigationBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Greeting"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="BottomNavigation" component={Bottomnavigation} />
          <Stack.Screen name="Doctor-Login" component={DoctorLogin} />
          <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
          <Stack.Screen
            name="Doctor-Patient-Selection"
            component={DoctorPatientSelection}
          />
          <Stack.Screen name="Greeting" component={Greeting} />
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
