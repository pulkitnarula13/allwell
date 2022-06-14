import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import doctorLogin from "./screens/Doctor-Login";
import doctorSignup from "./screens/Doctor-Signup";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./constants/theme";
import Bottomnavigation from "./components/BottomNavigation";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="doctor-login"
        >
          <Stack.Screen name="BottomNavigation" component={Bottomnavigation} />
          <Stack.Screen name="Doctor-Login" component={doctorLogin} />
          <Stack.Screen name="Doctor-Signup" component={doctorSignup} />
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
