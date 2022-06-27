import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import DoctorConnect from "../screens/Doctor/Doctor-connect";
import Profile from "../screens/Doctor/Doctor-Profile";

const Bottomnavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "DoctorHome", icon: "home" },
    { key: "connect", title: "DoctorConnect", icon: "account-plus" },
    { key: "history", title: "History", icon: "briefcase" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: DoctorHome,
    connect: DoctorConnect,
    // history: History,
    history: AvailableDoctor,
    profile: Profile,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#DADADA" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Bottomnavigation;
