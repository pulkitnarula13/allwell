import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import DoctorHome from "../screens/Doctor/Doctor-Home";
import ConnectDoctor from "../screens/Patient/Connect-Doctor";
import Profile from "../screens/Patient/profile";
import Schedulepatient from "../screens/Doctor/Schedule-patient";

const Bottomnavigation = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "DoctorHome", icon: "home" },
    { key: "connect", title: "DoctorConnect", icon: "account-plus" },
    { key: "history", title: "Schedule", icon: "briefcase" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'home':
        return <DoctorHome  jumpTo={jumpTo} />;
      case 'connect':
        return <ConnectDoctor {...props} jumpTo={jumpTo} />;
        case 'history':
          return <Schedulepatient  jumpTo={jumpTo} />;
          case 'profile':
          return <Profile {...props} jumpTo={jumpTo} />;
    }
  }

  return (
    <BottomNavigation
      {...props}
      barStyle={{ backgroundColor: "#DADADA" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}

    />
  );
};

export default Bottomnavigation;
