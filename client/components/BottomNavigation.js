import  React, { useContext, useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import DoctorConnect from "../screens/Doctor/Doctor-connect";
import AvailableDoctor from "../screens/Patient/Available-Doctor";
import { AuthContext } from "../Context/AuthContext";
import Schedulepatient from "../screens/Doctor/Schedule-patient";
import DoctorProfile from "../screens/Doctor/Doctor-Profile";
import DoctorInbox from "../screens/Doctor/Doctor-Inbox";
import PatientProfile from "../screens/Patient/Patient-Profile";
import PatientHome from "../screens/Patient/Patient-Home";

const Bottomnavigation = () => {
  const { userInfo } = useContext(AuthContext);
  
  const [render, setRender] = useState({
    home: PatientHome,
    connect: DoctorConnect,
    history: AvailableDoctor,
    profile: PatientProfile,
  });
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

      setRender({
        home: DoctorHome,
        schedule: Schedulepatient,
        inbox: DoctorInbox,
        docprofile: DoctorProfile,
      })
    }
  }, [])
  
  const [index, setIndex] = React.useState(0);

  const renderState = BottomNavigation.SceneMap(render);

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#DADADA" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderState}
    />
  );
};

export default Bottomnavigation;
