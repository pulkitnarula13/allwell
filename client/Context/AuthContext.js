import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Alert } from 'react-native';
import { BASE_URL_DEV } from "@env";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const registerPatient = (
    { name, email, dob, phoneNumber, password, healthNumber, gender },
    navigation
  ) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL_DEV}/patients/register`, {
        name,
        email,
        dob,
        phoneNumber,
        password,
        healthNumber,
        gender,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.navigate("Login");
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const patientLogin = ({ email, password }, navigation) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL_DEV}/patients/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.navigate("Home");
      })
      .catch((e) => {
        Alert.alert("error", e.message);
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };


  const doctorLogin = ({ email, password }, navigation) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL_DEV}/doctors/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.navigate("Doctor-Home");
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("error", e.message);
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    // setIsLoading(true);

    // axios
    //   .post(
    //     `${BASE_URL_DEV.MAIN}/logout`,
    //     {},
    //     {
    //       headers: { Authorization: `Bearer ${userInfo.access_token}` },
    //     }
    //   )
    //   .then((res) => {
    //     AsyncStorage.removeItem("userInfo");
    //     setUserInfo({});
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     console.log(`logout error ${e}`);
    //     setIsLoading(false);
    //   });
    AsyncStorage.removeItem("userInfo");
    setUserInfo({});
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
     
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        registerPatient,
        patientLogin,
        doctorLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
