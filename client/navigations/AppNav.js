import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../Context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNav = () => {
  const { userInfo } = useContext(AuthContext);

  // AsyncStorage.removeItem("userInfo");


  return <>{userInfo ? <AppStack /> : <AuthStack />}</>;
};

export default AppNav;
