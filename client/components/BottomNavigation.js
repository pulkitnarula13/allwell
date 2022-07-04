import  React, { useContext, useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import { AuthContext } from "../Context/AuthContext";
import Schedulepatient from "../screens/Doctor/Schedule-patient";
import DoctorProfile from "../screens/Doctor/Doctor-Profile";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import PatientProfile from "../screens/Patient/Patient-Profile";
import PatientHome from "../screens/Patient/Patient-Home";
import ConnectDoctor from "../screens/Patient/Connect-Doctor";
import PatientHistory from "../screens/Patient/Patient-History";
import ConnectPatient from "../screens/Patient/Connect-Doctor";
import PatientQuestion from "../screens/Patient/Patient-Question";



const Bottomnavigation = ({navigation}) => {
  const { userInfo } = useContext(AuthContext);
  
  const [routes, setRoutes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "connect", title: "Connect", icon: "account-plus" },
    { key: "history", title: "History", icon: "briefcase" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  useEffect(() => {
    if (userInfo.roles === "doctor") {
      setRoutes([
        { key: "home", title: "Home", icon: "home" },
        { key: "schedule", title: "Schedule", icon: "calendar" },
        { key: "inbox", title: "Inbox", icon: "message" },
        { key: "docprofile", title: "Profile", icon: "account" },
      ])
    }
  }, [])

  const renderValDoctor = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <DoctorHome navigation={navigation} jumpTo={jumpTo} />;
      case "schedule":
        return <Schedulepatient navigation={navigation} jumpTo={jumpTo} />;
      case "inbox":
        return <DoctorInbox navigation={navigation} jumpTo={jumpTo} />;
      case "docprofile":
        return <DoctorProfile navigation={navigation} jumpTo={jumpTo} />;
    }
  };

  const renderValPatient = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <PatientQuestion navigation={navigation} jumpTo={jumpTo} />;
      case "connect":
        return <ConnectPatient navigation={navigation} jumpTo={jumpTo} />;
      case "history":
        return <PatientHistory navigation={navigation} jumpTo={jumpTo} />;
      case "profile":
        return <PatientProfile navigation={navigation} jumpTo={jumpTo} />;
    }
  };

  
  const [index, setIndex] = React.useState(0);

  // const renderState = BottomNavigation.SceneMap(renderValDoctor);

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#DADADA" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={userInfo.roles === "doctor" ? renderValDoctor : renderValPatient}
    />
  );
};

export default Bottomnavigation;
