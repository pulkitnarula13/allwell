import { View, Text, StyleSheet, FlatList, Image, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";
import PushNotification from "../../components/PushNotification";

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

const AcceptPatientSchedule = (props) => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [appointmentInfo, setAppointmentInfo] = useState(props.route.params);
  const { userInfo } = useContext(AuthContext);
  console.log(appointmentInfo, "appointmentInfo");
  const [messageForAppointment, setMessageForAppointment] = useState("");

  const confirmAppointment = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/confirm/${appointmentInfo.item._id}`,
        {
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      const modifiedDate = new Date(date);
      setMessageForAppointment(
        `Your appointment is confirmed for ${modifiedDate.toDateString()}`
      );

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Doctor-Home");
    } catch (error) {
      console.log(error, "error");
      Alert.alert("Error", error.message);
    }
  };

  const cancelAppointment = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/cancel/${appointmentInfo.item._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setMessageForAppointment(
        `Oops your appointment was cancelled by Dr. ${userInfo.name}`
      );

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Doctor-Home");
    } catch (error) {
      Alert.alert("Error", response.data.message);
    }
  };
  console.log(appointmentInfo, "appointmentInfo");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // setShow(false);
    console.log(currentDate, "current Time");
    setTime(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <ScrollView>
      {messageForAppointment ? (
        <PushNotification
          title={`Appointment Booking Update`}
          body={messageForAppointment}
          toToken={appointmentInfo.item.patient.expoToken}
        />
      ) : null}
      <View style={styles.outerview1}>
        <View style={styles.outerview}>
          <Text style={styles.text1}>Schedule Patient</Text>
        </View>

        <View style={styles.innerview}>
          <Text style={styles.text2}>{appointmentInfo.item.patient.name}</Text>

          <View style={styles.text3}>
            <Text>Request Time: {appointmentInfo.item.createdAt}</Text>
          </View>

          <Text style={styles.datandtime1}>Symptoms</Text>

          <View style={styles.flatlistView}>
            <FlatList
              horizontal={true}
              data={appointmentInfo.item.symptoms}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          </View>

          <Text style={styles.description}>More Description</Text>
          <Text style={styles.lorem1}>
            {appointmentInfo.item?.qna[0]?.answer}
          </Text>
        </View>

        <View style={styles.viewDateTimeContainer}>
          <Text style={styles.txtDate}>Date</Text>
          <Calendar
            style={{
              // marginLeft: 40,
              borderWidth: 1,
              borderColor: "gray",
              // height: 350,
              // width: '80%',
            }}
            selected={date}
            onDayPress={(day) => {
              setDate(day.dateString);
            }}
            enableSwipeMonths={true}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "orange",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "blue",
              indicatorColor: "blue",
              textDayFontWeight: "300",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />

          <View style={styles.viewDividerLine} />

          <View style={styles.viewTimePicker}>
            <Text style={styles.txtSelectedDate}>Select Time:</Text>
            {show && (
              <DateTimePicker
                value={time}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View></View>

        <View style={styles.buttons}>
          <Button
            style={styles.availablebtn1}
            mode="contained"
            onPress={cancelAppointment}
          >
            Decline
          </Button>
          <Button
            style={styles.availablebtn2}
            mode="contained"
            onPress={confirmAppointment}
          >
            Accept
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  TimeSlot: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 270,
  },
  availablebtn1: {
    width: 160,
    height: 40,
    marginRight: 29,
    backgroundColor: "#E2E8F0",
  },
  availablebtn2: {
    width: 160,
    height: 40,
    backgroundColor: "#E2E8F0",
  },
  lorem1: {
    width: 349,
    height: 60,
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 17,
  },

  description: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 11,
  },
  datandtime1: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
  },
  innerview: {
    paddingLeft: 19,
    marginTop: 44.66,
  },
  outerview1: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  flatlistView: {
    marginTop: 9,
  },
  text1: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginTop: 38,
  },
  text2: {
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 22,
    marginBottom: 4,
  },
  text3: {
    marginBottom: 11,
  },
  image1: {
    width: 50,
    height: 50,
    marginRight: 28,
  },
  name1: {
    width: 67,
    textAlign: "center",
    marginBottom: 10,
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },

  viewSchedulerContainer: {
    paddingBottom: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
  },

  viewDateTimeContainer: {
    display: "flex",
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "space-around",
    // padding: 20,
    margin: 30,
    borderWidth: 2,
    borderColor: "D9D9D9",
    borderRadius: 10,
  },

  viewDateTimePicker: {
    textAlign: "center",
    paddingRight: 150,
  },

  textSelected: {
    display: "block",
  },
  viewDividerLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
  },
  txtDate: {
    textAlign: "left",
    fontSize: 18,
    padding: 10,
  },

  txtTime: {
    textAlign: "left",
    fontSize: 18,
    padding: 10,
  },

  txtSelectedDate: {
    textAlign: "left",
    fontSize: 18,
    padding: 10,
  },

  viewTimePicker: {
    paddingBottom: 20,
  },
});

export default AcceptPatientSchedule;
