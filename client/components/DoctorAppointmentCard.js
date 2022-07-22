import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper";

const DoctorAppointmentCard = ({ appointments, navigation }) => {
  return (
    <View>
      <View style={styles.viewDataContainer}>
        {/* Patient Meeting */}

        {appointments.map((data, index) => {
          var newdate = new Date(data.date);

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Info-Patient")}
            >
              <View style={styles.viewPatientMeeting}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Button style={{}} color="#74CBD4" icon="clock"></Button>
                  <Text style={styles.textPatientMeetingTime}>
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
                  {!data.patient.profilePicture ? (
                    <Avatar.Text
                      style={{ backgroundColor: "#74CBD4",    width: 48,
                      borderRadius: 50,
                      height: 48,
                      marginTop: -10, }}
                      size={40}
                      label={data.patient.name[0]}
                      color="#fff"
                    />
                  ) : (
                    <Image
                      style={styles.imagePatient}
                      source={{
                        uri: `${data.patient.profilePicture}`,
                      }}
                      resizeMode="contain"
                    />
                  )}

                  <Text style={styles.textPatientName}>
                    {data.patient.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

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
              onPress={() => navigation.navigate("Doctor-Home")}
            >
              <Text style={styles.textButton}>Book Schedule</Text>
            </Button>
          </View>
        </View>
      </View>
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

export default DoctorAppointmentCard;
