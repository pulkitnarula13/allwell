import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../Context/AuthContext";

const AppNav = () => {
  const { userInfo } = useContext(AuthContext);

  return <>{userInfo ? <AppStack /> : <AuthStack />}</>;
};

export default AppNav;
