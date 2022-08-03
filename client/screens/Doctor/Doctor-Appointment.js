import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabScreen } from "react-native-paper-tabs";
import CalendarStrip from "react-native-calendar-strip";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";
import DoctorAppointmentCard from "../../components/DoctorAppointmentCard";

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
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [cancelledAppointments, setCancelledAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getPatientAppointmentsByDate();
  }, [selectedDate]);

  const getPatientAppointmentsByDate = async () => {
    try {
      const data = await axios.get(
        `${BASE_URL_DEV}/appointments/doctor/date?id=${userInfo.id}&dateVal=${selectedDate}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      const confirmedAppointments = data.data.data.filter(
        (data) => data.confirmed && !data.cancelled && !data.completed
      );

      setConfirmedAppointments(confirmedAppointments);

      const completedAppointments = data.data.data.filter(
        (data) => data.completed && data.confirmed && !data.cancelled
      );
      setCompletedAppointments(completedAppointments);

      const cancelledAppointments = data.data.data.filter(
        (data) => !data.completed && !data.confirmed && data.cancelled
      );
      setCancelledAppointments(cancelledAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  const PatientAppointmentRender = ({ item }) => {
    var newdate = new Date(item.date);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Info-Patient")}
      >
        <View style={styles.viewPatientMeeting}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.clock}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/icons/medico_icon_clock.png")}
              />
            </View>
            <Text style={styles.time}>
              {`${newdate.getHours()}:${
                newdate.getMinutes() ? newdate.getMinutes() : "00"
              }`}{" "}
              {`- ${newdate.getHours() + 1}:${
                newdate.getMinutes() ? newdate.getMinutes() : "00"
              }`}
            </Text>
          </View>
          <View style={styles.viewDividerLine} />
          <View style={styles.viewPatientData}>
            <Image
              style={styles.imagePatient}
              source={require("../../assets/icon.png")}
              resizeMode="cover"
            />
            <Text style={styles.textPatientName}>{item.patient.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <View style={styles.viewCalendarStrip}>
        <CalendarStrip
          style={{ height: 161, paddingTop: 20, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: "#fff" }}
          daySelectionAnimation={{
            type: "background",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          scrollToOnSetSelectedDate={true}
          calendarAnimation={{ type: "sequence", duration: 30 }}
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
          onDateSelected={(date) => {
            const updated = new Date(date).getDate();
            setSelectedDate(updated);
          }}
          highlightDateNumberStyle={{
            backgroundColor: "white",
            color: "#74CBD4",
            padding: 10,
          }}
        ></CalendarStrip>
      </View>

      <Tabs style={{ backgroundColor: "#fff" }}>
        <TabScreen label="Upcoming">
          <DoctorAppointmentCard
            appointments={confirmedAppointments}
            navigation={props.navigation}
          />
        </TabScreen>
        <TabScreen label="Completed">
          <DoctorAppointmentCard
            appointments={completedAppointments}
            navigation={props.navigation}
          />
        </TabScreen>
        <TabScreen label="Canceled">
          <DoctorAppointmentCard
            appointments={cancelledAppointments}
            navigation={props.navigation}
          />
        </TabScreen>
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPage: {
    backgroundColor: "#FCFCFC",
  },
  time: {
    fontSize: 12,
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
  clock: {
    minWidth: 20,
    display: "flex",
    justifyContent: "flex-start",
    height: 20,
    marginRight: 25,
    marginLeft: 12,
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
