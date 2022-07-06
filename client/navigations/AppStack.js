import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../components/CustomNavigationBar";
import Bottomnavigation from "../components/BottomNavigation";
import AvailableDoctor from "../screens/Patient/Available-Doctor";
import PatientHome from "../screens/Patient/Patient-Home";
import DoctorWaitingList from "../screens/Doctor/Doctor-Waiting-List";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import DoctorUrgent from "../screens/Doctor/Doctor-Urgent";
import PatientQuestiontwo from "../screens/Patient/Patient-Questiontwo";
import PatientQuestionSummary from "../screens/Patient/Patient-QuestionSummary";
import Requestwait from "../screens/Patient/Requestwait";
import PatientQuestion from "../screens/Patient/Patient-Questionone";
import DoctorInfo from "../screens/Patient/Doctor-Info";
import AddFamilyMember from "../screens/Patient/AddFamilyMember";
import PatientProfileSettings from "../screens/Patient/Profile-settings";
import PatientLogin from "../screens/Common/Patient-Login";
import ForgotPassword from "../screens/Common/ForgotPassword";
import PatientQuestionHome from "../screens/Patient/PatientQuestionHome";


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
      <Stack.Screen name="Patient-Questiontwo" component={PatientQuestiontwo}  />
      <Stack.Screen name="Patient-QuestionSummary" component={PatientQuestionSummary} />
      <Stack.Screen name="AvailableDoctor" component={AvailableDoctor} />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />
      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}
      <Stack.Screen name="Doctor-Inbox" component={DoctorInbox} />
      <Stack.Screen name="Doctor-Waiting-List" component={DoctorWaitingList} />
      <Stack.Screen name="Doctor-Urgent" component={DoctorUrgent} />

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen name="Patient-question-home" component={PatientQuestionHome} />
      <Stack.Screen name="Requestwait" component={Requestwait} />
      <Stack.Screen name="Available-Doctor" component={AvailableDoctor} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />
      <Stack.Screen name="PatientQuestion1" component={PatientQuestion}  />
      <Stack.Screen name="Doctor-Info" component={DoctorInfo}  />
      <Stack.Screen name="Add-Family-Member" component={AddFamilyMember}  />
      <Stack.Screen name="Patient-Profile-Settings" component={PatientProfileSettings}  />
      <Stack.Screen name="Patient-Login" component={PatientLogin} />
      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
