import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Tabs, TabScreen } from "react-native-paper-tabs";

import CalendarStrip from "react-native-calendar-strip";

import DoctorAppointmentCard from "../../components/DoctorAppointmentCard";
const DATA = [
  {
    name: "Headache",
    image: "../../assets/icon.png",
  },
  {
    name: "Cough",
    image: "../../assets/icon.png",
  },
  {
    name: "Muscle Cramp",
    image: "../../assets/icon.png",
  },
  {
    name: "Sore Throad",
    image: "../../assets/icon.png",
  },
  {
    name: "Stomach Pain",
    image: "../../assets/icon.png",
  },
  {
    name: "Congestion",
    image: "../../assets/icon.png",
  },
  {
    name: "Fever",
    image: "../../assets/icon.png",
  },
];

const Item = ({ name, image }) => (
  <View style={styles.item}>
    <Image
      style={styles.image1}
      source={require("../../assets/icon.png")}
      resizeMode="center"
    />
    <Text style={styles.name1}>{name}</Text>
  </View>
);
const datenow = Date.now();

const DoctorAppointment = (props) => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={styles.viewCalendarStrip}>
        <CalendarStrip
          style={{ height: 161, paddingTop: 20, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: "white" }}
          dateNumberStyle={{
            color: "white",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: 10,
            marginRight: 8,
          }}
          dateNameStyle={{ color: "white" }}
          startingDate={datenow}
          selectedDate={{ color: "red" }}
          highlightDateNumberStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            borderRadius: 20,
          }}
          // highlightDateNameStyle={{backgroundColor:"white",borderWidth:1,borderColor:"white",padding:10,borderRadius:20,width:49}}
        ></CalendarStrip>
      </View>

      <Tabs style={{ backgroundColor: "#fff" }}>
        <TabScreen label="Upcoming">
          <DoctorAppointmentCard />
        </TabScreen>

        <TabScreen label="Completed">
          <DoctorAppointmentCard />
        </TabScreen>
        <TabScreen label="Canceled">
          <DoctorAppointmentCard />
        </TabScreen>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPage: {
    backgroundColor: "#FCFCFC",
  },
  viewPageName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FCFCFC",
  },
  textPageName: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginTop: 38,
  },
  viewCalendarStrip: {
    marginTop: 20,
    height: 161,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#74CBD4",
    color: "white",
  },
  viewSelection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 20,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  textSelection: {
    fontSize: 18,
  },
  viewDataContainer: {
    backgroundColor: "#fcfcfc",
    // paddingTop: 20,
    display: "flex",
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-around",
  },
  viewDividerLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 7,
    paddingBottom: 7,
  },
  viewPatientMeeting: {
    width: 343,
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    height: 130,
    padding: 20,
    color: "black",
    borderColor: "#CBD5E0",
    borderWidth: 1,
    borderRadius: 20,
  },
  textPatientMeetingTime: {
    color: "black",
    fontSize: 12,
    marginTop: 7,
    marginLeft: -19,
  },
  viewPatientData: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    height: 48,
  },
  imagePatient: {
    width: 48,
    borderRadius: 50,
    height: 48,
    marginTop: -10,
  },
  textPatientName: {
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    color: "black",
    fontWeight: "400",
    lineHeight: 18,
  },
  viewMeeting: {
    marginTop: 20,
    width: 341,
    backgroundColor: "white",
    padding: 15,
    height: 104,
    color: "black",
    borderColor: "#CBD5E0",
    borderWidth: 1,
    borderRadius: 20,
  },
  textMeetingTime: {
    color: "black",
    fontSize: 12,
  },
  viewButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textButton: {
    fontSize: 14,
    textTransform: "capitalize",
    color: "white",
  },
  textAvailable: {
    fontSize: 16,
    fontWeight: "400",
    paddingTop: 10,
  },

  btnBookSchedule: {
    width: 150,
    height: 49,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#74CBD4",
    borderRadius: 30,
    marginTop: -5,
  },
});

export default DoctorAppointment;
