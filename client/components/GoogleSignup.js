import { Button, View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";
import {
  IOS_CLIENT_ID,
  WEB_CLIENT_ID,
  EXPO_CLIENT_ID,
} from "@env";

WebBrowser.maybeCompleteAuthSession();

const GoogleSignup = () => {
  const [userInfo, setUserInfo] = useState();
  const [accessToken, setAccessToken] = useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = async () => {
    let userInfoResponse = await axios.get(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(userInfoResponse);
  };

  const showUserInfo = async () => {
    if (userInfo) {
      return (
        <View>
          <Image source={{ uri: userInfo.picture }} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <Button
        title={accessToken ? "Get User Data" : "Login with Google"}
        onPress={
          accessToken
            ? getUserData
            : () => {
                promptAsync({ showInRecents: true });
              }
        }
      ></Button>
    </View>
  );
};

export default GoogleSignup;
