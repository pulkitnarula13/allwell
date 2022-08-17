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
import TermsDoctors from "../screens/Doctor/Terms-Doctors";
import PrivacyPolicyDoctors from "../screens/Doctor/PrivacyPolicyDoctors";

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
    >
      {/* Auth Stack */}

      <Stack.Screen name="Greeting" component={Greeting} />
      {/* COMMON NAVIGATIONS STARTED */}
      <Stack.Screen
        name="Home"
        component={Bottomnavigation}
        options={{
          title: 'Medico',
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="Doctor-Patient-Selection-Signup"
        component={DoctorPatientSelectionSignup}
        options={{
          title: 'Select your profile',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="Doctor-Patient-Selection-Login"
        component={DoctorPatientSelectionLogin}
        options={{
          title: 'Select your profile',
          headerStyle: {
            backgroundColor: '#fff',
          },
          // headerTintColor: '#fff',
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="forgot-password" component={ForgotPassword}  options={{
          title: 'Forgot password',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }} />

      <Stack.Screen name="Doctor-Signup" component={DoctorSignup} />
      <Stack.Screen name="Patient-Signup" component={PatientSignup} />
      <Stack.Screen name="Doctor-Login" component={DoctorLogin} 
       options={{
        title: 'Login here',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
      />
      <Stack.Screen name="Patient-Login" component={PatientLogin}   options={{
          title: 'Login here',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }} />
      <Stack.Screen
        name="DoctorSignupScreenLast"
        component={DoctorSignupScreenLast}
      />

      {/* Auth Stack ends */}

      <Stack.Screen name="GreetingPage" component={Greeting}         options={{
        title: 'Greeting',
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}/>
      <Stack.Screen name="AvailableDoctor" component={AvailableDoctor}
       options={{
        title: 'Available Doctors',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      <Stack.Screen name="Patient-Questiontwo" component={PatientQuestionTwo} />
      <Stack.Screen
        name="Patient-QuestionSummary"
        component={PatientQuestionSummary}
      />

      {/* COMMON NAVIGATIONS ENDED */}

      {/* DOCTOR NAVIGATIONS STARTED*/}
      <Stack.Screen name="Doctor-Inbox" component={DoctorInbox}        options={{
        title: 'My Inbox',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />

      <Stack.Screen name="Doctor-Waiting-List" component={DoctorWaitingList} />
      <Stack.Screen name="Doctor-Urgent" component={DoctorUrgent} />
      <Stack.Screen
        name="Doctor-Profile-Settings"
        component={DoctorProfileSettings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="Schedule-Patient" component={SchedulePatient} />
      <Stack.Screen name="Doctorprofile" component={Doctorprofile} 
       options={{
        title: 'My Profile',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
      />
      <Stack.Screen name="DoctorInformation" component={DoctorInformation}
       options={{
        title: 'My Information',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
      />
      <Stack.Screen
        name="Accept-Patient-Schedule"
        component={AcceptPatientSchedule}

        options={{
          title: 'Approve Schedule',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="Notfication" component={Notification} />

      <Stack.Screen name="Chatting" component={Chattingwithdoctor}        options={{
        title: 'Patient Request',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      <Stack.Screen
        name="Managefamilymembers"
        component={Managefamilymembers}
        options={{
          title: 'Manage Family',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="Info-Patient" component={InfoPatient} />
      <Stack.Screen name="Doctor-Appointment" component={DoctorAppointment} />
      <Stack.Screen
        name="AcceptPatientSchedule"
        component={AcceptPatientSchedule}
      />
      <Stack.Screen name="PatientProfile" component={PatientProfile} />
      <Stack.Screen name="PatientInformation" component={PatientInformation} />
      <Stack.Screen name="Doctor-Home" component={DoctorHome} />

      <Stack.Screen name="TermsDoctors" component={TermsDoctors} />
      <Stack.Screen
        name="PrivacyPolicyDoctors"
        component={PrivacyPolicyDoctors}
      />
      <Stack.Screen name="FAQDoctors" component={FAQDoctors}  options={{
          title: 'Questions for Doctor',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }} />

      {/* DOCTOR NAVIGATIONS ENDED*/}

      {/* PATIENT NAVIGATIONS STARTED */}
      <Stack.Screen
        name="Patient-question-home"
        component={PatientQuestionHome}
        options={{
          title: 'Questions for Doctor',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="Requestwaitgif" component={Requestwaitgif} />
      <Stack.Screen name="PatientChatting" component={PatientChatting}
       options={{
        title: 'My Chat History',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
      />
      <Stack.Screen name="Requestwait" component={Requestwait} />
      <Stack.Screen name="Patient-Home" component={PatientHome} 
       options={{
        title: 'My home',
        headerTintColor: '#fff',
        headerTitleStyle: {
        },
      }}
      />
      <Stack.Screen name="PatientQuestion1" component={PatientQuestionOne} />
      <Stack.Screen name="Doctor-Info" component={DoctorInfo}  options={{
          title: 'Doctor information',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
        />
      <Stack.Screen name="Add-Family-Member" component={AddFamilyMember}  options={{
          title: 'Add Family',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }} />
      <Stack.Screen
        name="Patient-Profile-Settings"
        component={PatientProfileSettings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }}
      />
      <Stack.Screen name="All-Symptoms" component={AllSymptoms}
       options={{
        title: 'Select Symptoms',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      <Stack.Screen name="Doctor-Connect" component={ConnectPatient}  options={{
          title: 'Connect with Doctor',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {

            color: "#000",
          },
        }} />

      <Stack.Screen name="Termsofuse-patient" component={Termsofuse}
       options={{
        title: 'Terms of Use',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      <Stack.Screen name="Privacypolicy-patient" component={Privacypolicy}
       options={{
        title: 'Privacy Policy',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      <Stack.Screen name="FAQ-patient" component={FAQ}
       options={{
        title: 'FAQ',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: "#000",
        },
      }} />
      {/* PATIENT NAVIGATIONS ENDED */}
    </Stack.Navigator>
  );
};

export default AppStack;
