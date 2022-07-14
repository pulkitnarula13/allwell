import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../components/CustomNavigationBar";
import Bottomnavigation from "../components/BottomNavigation";
import AvailableDoctor from "../screens/Patient/Available-Doctor";
import PatientHome from "../screens/Patient/Patient-Home";
import DoctorWaitingList from "../screens/Doctor/Doctor-Waiting-List";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import DoctorUrgent from "../screens/Doctor/Doctor-Urgent";
import Requestwait from "../screens/Patient/Requestwait";
import DoctorInfo from "../screens/Patient/Doctor-Info";
import AddFamilyMember from "../screens/Patient/AddFamilyMember";
import PatientProfileSettings from "../screens/Patient/Profile-settings";
import PatientLogin from "../screens/Common/Patient-Login";
import DoctorProfileSettings from "../screens/Doctor/Doctor-Profile-Settings";
import DoctorLogin from "../screens/Common/Doctor-Login";
import SchedulePatient from "../screens/Doctor/Schedule-patient";
import AcceptPatientSchedule from "../screens/Doctor/Accept-Patient-Schedule";
import InfoPatient from "../screens/Doctor/Info-Patient";
import DoctorAppointment from "../screens/Doctor/Doctor-Appointment";
import PatientChat from "../screens/Doctor/Patient-Chat";
import ForgotPassword from "../screens/Common/ForgotPassword";
import Chattingwithdoctor from "../screens/Patient/Chattingwithdoctor";
import Greeting from "../screens/Common/Greeting";
import DoctorPatientSelectionSignup from "../screens/Common/Doctor-Patient-Selection-Signup";
import DoctorPatientSelectionLogin from "../screens/Common/Doctor-Patient-Selection-Login";
import PatientProfile from "../screens/Patient/Patient-Profile";
import AccountInformation from "../screens/Patient/AccountInformation";
import PatientQuestionTwo from "../screens/Patient/Questionaires/PatientQuestionTwo";
import PatientQuestionOne from "../screens/Patient/Questionaires/PatientQuestionOne";
import PatientQuestionHome from "../screens/Patient/Questionaires/PatientQuestionHome";
import PatientQuestionSummary from "../screens/Patient/Questionaires/PatientQuestionSummary";
import Notification from "../screens/Doctor/Notification";
import AllSymptoms from "../screens/Patient/AllSymptoms";
import ConnectPatient from "../screens/Patient/Connect-Doctor";
import DoctorHome from "../screens/Doctor/Doctor-Home";

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

      
      <Stack.Screen name="greeting" component={Greeting} />
      <Stack.Screen
        name="Doctor-Patient-Selection-Signup"
        component={DoctorPatientSelectionSignup}
      />
      <Stack.Screen name="AvailableDoctor" component={AvailableDoctor} />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />
      <Stack.Screen
        name="Doctor-Patient-Selection-Login"
        component={DoctorPatientSelectionLogin}
      />
       <Stack.Screen name="Patient-Questiontwo" component={PatientQuestionTwo} />
      <Stack.Screen
        name="Patient-QuestionSummary"
        component={PatientQuestionSummary}
      />
      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}
      <Stack.Screen name="Doctor-Inbox" component={DoctorInbox} />
     
      <Stack.Screen name="Doctor-Waiting-List" component={DoctorWaitingList} />
      <Stack.Screen name="Doctor-Urgent" component={DoctorUrgent} />
      <Stack.Screen
        name="Doctor-Profile-Settings"
        component={DoctorProfileSettings}
      />
      <Stack.Screen name="Chattingwithdoctor" component={Chattingwithdoctor} />
      <Stack.Screen name="Doctor-Login" component={DoctorLogin} />
      <Stack.Screen name="Schedule-Patient" component={SchedulePatient} />
      <Stack.Screen
        name="Accept-Patient-Schedule"
        component={AcceptPatientSchedule}
      />
      <Stack.Screen
        name="Notfication"
        component={Notification}
      />

<Stack.Screen
        name="Chatting"
        component={Chattingwithdoctor}
      />
      <Stack.Screen name="Info-Patient" component={InfoPatient} />
      <Stack.Screen name="Doctor-Appointment" component={DoctorAppointment} />
      <Stack.Screen name="AcceptPatientSchedule" component={AcceptPatientSchedule} />
      <Stack.Screen name="PatientProfile" component={PatientProfile} />
      <Stack.Screen name="Patient-Chat" component={PatientChat} />
      <Stack.Screen name="AccountInformation" component={AccountInformation} />
      <Stack.Screen name="Doctor-Home" component={DoctorHome} />

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen
        name="Patient-question-home"
        component={PatientQuestionHome}
      />
      <Stack.Screen name="Requestwait" component={Requestwait} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />
      <Stack.Screen name="PatientQuestion1" component={PatientQuestionOne} />
      <Stack.Screen name="Doctor-Info" component={DoctorInfo} />
      <Stack.Screen name="Add-Family-Member" component={AddFamilyMember} />
      <Stack.Screen
        name="Patient-Profile-Settings"
        component={PatientProfileSettings}
      />
      <Stack.Screen name="Patient-Login" component={PatientLogin} />
      <Stack.Screen name="All-Symptoms" component={AllSymptoms} />
      <Stack.Screen
        name="Doctor-Connect"
        component={ConnectPatient}
      />
      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
