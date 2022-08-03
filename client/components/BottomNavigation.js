import React, { useContext, useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import { AuthContext } from "../Context/AuthContext";
import DoctorAppointment from "../screens/Doctor/Doctor-Appointment";
import DoctorProfile from "../screens/Doctor/Doctor-Profile";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import PatientHistory from "../screens/Patient/Patient-History";
import ConnectPatient from "../screens/Patient/Connect-Doctor";
import PatientHome from "../screens/Patient/Patient-Home";
import PatientProfile from "../screens/Patient/Patient-Profile";
import Chattingwithdoctor from "../screens/Patient/Chattingwithdoctor";
import { Image } from "react-native";


const Bottomnavigation = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [routes, setRoutes] = React.useState([
    { key: "home", title: "Home", /*icon: "home"*/ },
    { key: "connect", title: "Connect", /*icon: "account-plus"*/ },
    { key: "history", title: "History", /*icon: "briefcase"*/ },
    { key: "profile", title: "Profile", /*icon: "account"*/ },
  ]);

  useEffect(() => {
    if (userInfo.roles === "doctor") {
      setRoutes([
        { key: "home", title: "Home", /*icon: "home"*/ },
        { key: "schedule", title: "Schedule", /*icon: "calendar"*/ },
        { key: "inbox", title: "Inbox", /*icon: "message"*/ },
        { key: "docprofile", title: "Profile", /*icon: "account"*/ },
      ]);
    }
  }, []);

  const renderValDoctor = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <DoctorHome navigation={navigation} jumpTo={jumpTo} />;
      case "schedule":
        return <DoctorAppointment navigation={navigation} jumpTo={jumpTo} />;
      case "inbox":
        return <DoctorInbox navigation={navigation} jumpTo={jumpTo} />;
      case "docprofile":
        return <DoctorProfile navigation={navigation} jumpTo={jumpTo} />;
    }
  };

  const renderValPatient = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <PatientHome navigation={navigation} jumpTo={jumpTo} />;
      case "connect":
        return <ConnectPatient navigation={navigation} jumpTo={jumpTo} />;
      case "history":
        return <PatientHistory navigation={navigation} jumpTo={jumpTo} />;
      case "profile":
        return <PatientProfile navigation={navigation} jumpTo={jumpTo} />;
    }
  };


  const renderIconPatient = ({ route}) => {
    switch (route.key) {
      case 'home':
        return  <Image
        
        
        style={{ width: 27, height: 22.74 }}
        source={require("../assets/icons/medico_icon_home.png")}
      />;
      case 'connect':
        return <Image
        
        style={{ width: 27, height: 22.74 }}
        source={require("../assets/icons/medico_icon_connect.png")}
      />;
        case 'history':
        return <Image
        
        style={{ width: 27, height: 22.74 }}
        source={require("../assets/icons/medico_icon_history.png")}
      />;
        case 'profile':
        return <Image
       
        style={{ width: 27, height: 22.74 }}
        source={require("../assets/icons/medico_icon_profile.png")}
      />;
    }
  }

  const renderIconDoctor = ({ route }) => {
    switch (route.key) {
      case 'home':
        return  <Image
        
        style={{ width: 27, height: 22 }}
        source={require("../assets/icons/medico_icon_home.png")}
      />;
      case 'schedule':
        return <Image
        
        style={{ width: 27, height: 22 }}
        source={require("../assets/icons/medico_icon_calander.png")}
      />;
        case 'inbox':
        return <Image
       
        style={{ width: 27, height: 22 }}
        source={require("../assets/icons/medico_icon_inbox.png")}
      />;
        case 'docprofile':
        return <Image
       
        style={{ width: 27, height: 22 }}
        source={require("../assets/icons/medico_icon_profile.png")}
      />;
    }
  }


  const [index, setIndex] = React.useState(0);

  // const renderState = BottomNavigation.SceneMap(renderValDoctor);

  return (
    <BottomNavigation
      inactiveColor="#5EC1CE"
      activeColor="#5EC1CE"
      barStyle={{ backgroundColor: "#FFFFFF" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={
        userInfo.roles === "doctor" ? renderValDoctor : renderValPatient
      }
      renderIcon={
        userInfo.roles === "doctor" ? renderIconDoctor : renderIconPatient
      }
    />

  );
};

export default Bottomnavigation;
