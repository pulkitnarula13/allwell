import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../Context/AuthContext";

const AppNav = (props) => {
  const { userInfo } = useContext(AuthContext);

  return <>{userInfo ? <AppStack {...props} /> : <AuthStack {...props} />}</>;
};

export default AppNav;
