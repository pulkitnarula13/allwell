import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";

import CalendarStrip from "react-native-calendar-strip";

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

const SchedulePatient = (props) => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  console.log(props.navigation);

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.viewPage}>
        <View style={styles.viewPageName}>
          <Text style={styles.textPageName}>Schedule</Text>
        </View>
        <View style={styles.viewCalendarStrip}>
          <CalendarStrip></CalendarStrip>
        </View>
        <View style={styles.viewSelection}>
          <Text
            style={styles.textSelection}
            onPress={() => console.log("All Pressed")}
          >
            All
          </Text>
          <Text
            style={styles.textSelection}
            onPress={() => console.log("Appointment Pressed")}
          >
            Appointments
          </Text>
          <Text
            style={styles.textSelection}
            onPress={() => console.log("Available Pressed")}
          >
            Available
          </Text>
        </View>

        <View style={styles.viewDataContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Info-Patient")}
          >
            <View style={styles.viewPatientMeeting}>
              <Text style={styles.textPatientMeetingTime}>
                11:00 AM - 12:00 PM
              </Text>
              <View style={styles.viewDividerLine} />
              <View style={styles.viewPatientData}>
                <Image
                  style={styles.imagePatient}
                  source={require("../../assets/icon.png")}
                  resizeMode="contain"
                />
                <Text style={styles.textPatientName}>Mark</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Available Slots */}

          <View style={styles.viewMeeting}>
            <Text style={styles.textMeetingTime}>12:00 PM - 1:00 PM</Text>
            <View style={styles.viewDividerLine} />
            <View style={styles.viewButtons}>
              <Text
                style={styles.textAvailable}
                onPress={() => console.log("Available Pressed")}
              >
                Available
              </Text>
              <Button
                style={styles.btnBookSchedule}
                mode="contained"
                onPress={() => props.navigation.navigate("AcceptPatientSchedule")}
              >
                <Text style={styles.textButton}>Book Schedule</Text>
              </Button>
            </View>
          </View>
        </View>
        {/* End of whole page view */}
      </View>
    </ScrollView>
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
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#D9D9D9",
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  viewPatientMeeting: {
    width: 300,
    marginTop: 20,
    backgroundColor: "#C4C4C4",
    padding: 15,
    color: "white",
    borderRadius: 20,
  },
  textPatientMeetingTime: {
    color: "white",
    fontSize: 18,
  },
  viewPatientData: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
  },
  imagePatient: {
    width: 60,
    height: 60,
  },
  textPatientName: {
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  viewMeeting: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#C4C4C4",
    padding: 15,
    color: "black",
    borderRadius: 20,
  },
  textMeetingTime: {
    color: "black",
    fontSize: 18,
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
    fontSize: 18,
    fontWeight: "400",
    paddingTop: 10,
  },

  btnBookSchedule: {
    width: 150,
    height: 40,
    backgroundColor: "#74CBD4",
    borderRadius: 30,
  },
});

export default SchedulePatient;
