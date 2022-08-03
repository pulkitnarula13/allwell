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
import DoctorProfileSettings from "../screens/Doctor/Doctor-Profile-Settings";
import Doctorprofile from "../screens/Doctor/Doctor-Profile";
import SchedulePatient from "../screens/Doctor/Schedule-patient";
import AcceptPatientSchedule from "../screens/Doctor/Accept-Patient-Schedule";
import InfoPatient from "../screens/Doctor/Info-Patient";
import DoctorAppointment from "../screens/Doctor/Doctor-Appointment";
import Chattingwithdoctor from "../screens/Patient/Chattingwithdoctor";
import Greeting from "../screens/Common/Greeting";
import DoctorInformation from "../screens/Doctor/Doctor-Information";
import PatientProfile from "../screens/Patient/Patient-Profile";
import PatientInformation from "../screens/Patient/Patient-Information";
import PatientQuestionTwo from "../screens/Patient/Questionaires/PatientQuestionTwo";
import PatientQuestionOne from "../screens/Patient/Questionaires/PatientQuestionOne";
import PatientQuestionHome from "../screens/Patient/Questionaires/PatientQuestionHome";
import PatientQuestionSummary from "../screens/Patient/Questionaires/PatientQuestionSummary";
import Notification from "../screens/Doctor/Notification";
import AllSymptoms from "../screens/Patient/AllSymptoms";
import ConnectPatient from "../screens/Patient/Connect-Doctor";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import Managefamilymembers from "../screens/Patient/Managefamilymembers";
import FAQ from "../screens/Patient/FAQ";
import Privacypolicy from "../screens/Patient/Privacypolicy";
import Termsofuse from "../screens/Patient/Termsofuse";
import PatientChatting from "../components/Patient-Chatting";
import Requestwaitgif from "../screens/Patient/Requestwaitgif";
import FAQDoctors from "../screens/Doctor/FAQ-Doctors";
import TermsDoctors from "../screens/Doctor/Terms-Doctors"
import PrivacyPolicyDoctors from "../screens/Doctor/PrivacyPolicyDoctors"

import DoctorPatientSelectionSignup from "../screens/Common/Doctor-Patient-Selection-Signup";
import DoctorPatientSelectionLogin from "../screens/Common/Doctor-Patient-Selection-Login";
import ForgotPassword from "../screens/Common/ForgotPassword";
import DoctorSignup from "../screens/Doctor/Doctor-Signup";
import PatientSignup from "../screens/Patient/Patient-Signup";
import DoctorLogin from "../screens/Common/Doctor-Login";
import PatientLogin from "../screens/Common/Patient-Login";
import DoctorSignupScreenLast from "../screens/Doctor/DoctorSignupScreenLast";


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >

      {/* Auth Stack */}

      <Stack.Screen name="Greeting" component={Greeting} />

      <Stack.Screen name="Doctor-Patient-Selection-Signup" component={DoctorPatientSelectionSignup} />
      <Stack.Screen name="Doctor-Patient-Selection-Login" component={DoctorPatientSelectionLogin} />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />

      <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
      <Stack.Screen name="Patient-Signup" component={PatientSignup} />
      <Stack.Screen name="Doctor-Login" component={DoctorLogin} />
      <Stack.Screen name="Patient-Login" component={PatientLogin} />
      <Stack.Screen name="DoctorSignupScreenLast" component={DoctorSignupScreenLast} />




      {/* Auth Stack ends */}



      {/* COMMON NAVIGATIONS STARTED */}
      <Stack.Screen name="Home" component={Bottomnavigation} />


      <Stack.Screen name="GreetingPage" component={Greeting} />
      <Stack.Screen name="AvailableDoctor" component={AvailableDoctor} />
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
      <Stack.Screen name="Schedule-Patient" component={SchedulePatient} />
      <Stack.Screen name="Doctorprofile" component={Doctorprofile} />
      <Stack.Screen name="DoctorInformation" component={DoctorInformation} />
      <Stack.Screen name="Accept-Patient-Schedule" component={AcceptPatientSchedule} />
      <Stack.Screen
        name="Notfication"
        component={Notification}
      />

      <Stack.Screen
        name="Chatting"
        component={Chattingwithdoctor}
      />
      <Stack.Screen name="Managefamilymembers" component={Managefamilymembers} />
      <Stack.Screen name="Info-Patient" component={InfoPatient} />
      <Stack.Screen name="Doctor-Appointment" component={DoctorAppointment} />
      <Stack.Screen name="AcceptPatientSchedule" component={AcceptPatientSchedule} />
      <Stack.Screen name="PatientProfile" component={PatientProfile} />
      <Stack.Screen name="PatientInformation" component={PatientInformation} />
      <Stack.Screen name="Doctor-Home" component={DoctorHome} />

      <Stack.Screen name="TermsDoctors" component={TermsDoctors} />
      <Stack.Screen name="PrivacyPolicyDoctors" component={PrivacyPolicyDoctors} />
      <Stack.Screen name="FAQDoctors" component={FAQDoctors} />

      {/* DOCTOR NAVIGATIONS ENDED*/}




      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen
        name="Patient-question-home"
        component={PatientQuestionHome}
      />
      <Stack.Screen name="Requestwaitgif" component={Requestwaitgif} />
      <Stack.Screen name="PatientChatting" component={PatientChatting} />
      <Stack.Screen name="Requestwait" component={Requestwait} />
      <Stack.Screen name="Patient-Home" component={PatientHome} />
      <Stack.Screen name="PatientQuestion1" component={PatientQuestionOne} />
      <Stack.Screen name="Doctor-Info" component={DoctorInfo} />
      <Stack.Screen name="Add-Family-Member" component={AddFamilyMember} />
      <Stack.Screen
        name="Patient-Profile-Settings"
        component={PatientProfileSettings}
      />
      <Stack.Screen name="All-Symptoms" component={AllSymptoms} />
      <Stack.Screen
        name="Doctor-Connect"
        component={ConnectPatient}
      />

      <Stack.Screen name="Termsofuse-patient" component={Termsofuse} />
      <Stack.Screen name="Privacypolicy-patient" component={Privacypolicy} />
      <Stack.Screen name="FAQ-patient" component={FAQ} />
      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
