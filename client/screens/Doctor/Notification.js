import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import NotificationItem from "./Notification-item";
import { Tabs, TabScreen } from "react-native-paper-tabs";

function Notification() {
  const listOFNotification = [
    {
      name: "Dr. John",
      message:
        "Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you. Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you.",
      time: "5 min ago",
    },
    {
      name: "Dr. John",
      message:
        "Hello, how are you? Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you.",
      time: "5 min ago",
    },
    {
      name: "Dr. John",
      message: "Hello, how are you? Hello, how are you? I am fine.",
      time: "5 min ago",
    },
  ];
  return (
    
      <View style={{  flexDirection: "column" ,flex:1}}>
      <Tabs style={{ backgroundColor: "#fff" }}>
        <TabScreen label="drug">
          <ScrollView>
          <NotificationItem item = {listOFNotification[0]}/>
          </ScrollView>
        </TabScreen>

        <TabScreen label="dr.message">
        <ScrollView>
        <NotificationItem item = {listOFNotification[1]}/>
        </ScrollView>
        </TabScreen>
        <TabScreen label="general">
        <ScrollView>
        <NotificationItem item = {listOFNotification[2]}/>
        </ScrollView>
        </TabScreen>
      </Tabs>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
  },
  imgstyle: {
    width: "100%",
    height: "100%",
    marginRight: 20,
  },
  imageview: {
    width: 20,
    alignItems: "flex-end",
  },
});

export default Notification;
