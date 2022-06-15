import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "../screens/Doctor-Home";
import Connect from "../screens/Doctor-connect";
import History from "../screens/Doctor-History";
import Profile from "../screens/Doctor-Profile";
import AvailableDoctor from "../screens/Available-Doctor ";

const Bottomnavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "connect", title: "Connect", icon: "account-plus" },
    { key: "history", title: "History", icon: "briefcase" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    connect: Connect,
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
