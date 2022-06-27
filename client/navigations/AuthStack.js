import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Greeting from "../screens/Common/Greeting";
import PatientSignup from "../screens/Patient/Patient-Signup";
import DoctorSignup from "../screens/Doctor/Doctor-Signup";
import Login from "../screens/Common/Login";
import DoctorPatientSelection from "../screens/Common/Doctor-Patient-Selection";
import ForgotPassword from "../screens/Common/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen
        name="Doctor-Patient-Selection"
        component={DoctorPatientSelection}
      />
      <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
      <Stack.Screen name="Patient-Signup" component={PatientSignup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
