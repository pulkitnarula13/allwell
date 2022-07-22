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
  <View style={{marginRight:50}}>
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
  const [mydate, setMyDate] = useState();
  const [time, setTime] = useState(date);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [appointmentInfo, setAppointmentInfo] = useState(props.route.params);
  const [dateVal, setDateVal] = useState(new Date().getDate());
  const { userInfo } = useContext(AuthContext);
  const [messageForAppointment, setMessageForAppointment] = useState("");

  console.log('Date: ', date);
  const confirmAppointment = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/confirm/${appointmentInfo.item._id}`,
        {
          date,
          time,
          dateVal
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
      props.navigation.navigate("Home");
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
  var newdate = new Date(appointmentInfo.item.createdAt);
  
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
       

        <View style={styles.innerview}>
          <Text style={styles.text2}>{appointmentInfo.item.patient.name}</Text>

          <View style={styles.text3}>
          <Text style={{fontSize:16,fontWeight:"400",color:"#718096"}}>{`${newdate.toDateString()}    ` }</Text>
          
          <Text style={{textAlign:"center",fontSize:16,fontWeight:"400",color:"#718096"}}>{`${newdate.getHours()}: ${newdate.getMinutes()}`}</Text>
          
            </View >
            
          </View>
            <View style={styles.innerview1}>
          <Text style={styles.datandtime1}>Symptoms</Text>

          <View style={styles.flatlistView}>
            <FlatList
              horizontal={true}
              data={appointmentInfo.item.symptoms}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          </View>

          <Text style={styles.description}>Description</Text>
          <Text style={styles.lorem1}>
            {appointmentInfo.item?.qna[0]?.answer}
          </Text>
        </View>
          <View>
            <Text style={{fontSize:16,fontWeight:"600",paddingLeft: 19,}}>Date and Time Slot</Text>
          </View>
        <View style={styles.viewDateTimeContainer}>
          
          <Text style={styles.txtDate1}>Date:</Text>
          <Text style={{marginBottom:10,marginLeft:10,fontSize: 12,fontWeight:"400"}}>{mydate ?  mydate : date.toDateString()}</Text>   
          
          <Calendar
            style={{
              marginLeft:33,
              // marginLeft: 40,
              borderWidth: 0.5,
              borderColor: "#CBD5E0",

              // height: 350,
              // width: '80%',
            }}
            selected={mydate}
            onDayPress={(day) => {
              setDate(day.dateString);
              setDateVal(day.day);
            }}
            enableSwipeMonths={true}
            theme={{
              backgroundColor: "#74CBD4",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "#74CBD4",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "black",
              textDisabledColor: "#d9e1e8",
              dotColor: "#74CBD4",
              selectedDotColor: "#74CBD4",
              arrowColor: "orange",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "black",
              indicatorColor: "black",
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
                style={{marginLeft:10,width:90}}
                value={time}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        

        <View style={styles.buttons}>
          <Button
            style={styles.availablebtn1}
            mode="contained"
            labelStyle={{color:"#74CBD4",fontWeight:"800"}}
            onPress={cancelAppointment}
          >
            Decline
          </Button>
          <Button
            style={styles.availablebtn2}
            mode="contained"
            labelStyle={{fontWeight:"800"}}
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
    alignItems:"center",
    marginBottom:50
  },
  TimeSlot: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 270,
  },
  availablebtn1: {
    width: 150,
    height: 49,
    marginRight: 29,
    borderRadius:100,
    textAlign:"center",
    backgroundColor: "white",
    borderWidth:2,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#74CBD4",
    
  },
  availablebtn2: {
    width: 150,
    height: 49,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    backgroundColor: "#74CBD4",
    borderRadius:100
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
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 21,
  },
  datandtime1: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
  },
  innerview: {
    paddingLeft: 19,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 43,
  },
  innerview1  : {
    paddingLeft: 19,
    marginTop: 19,
    
  },
  outerview1: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  flatlistView: {
    marginTop: 20,
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
    marginBottom:14,
    borderRadius:10,
    marginRight: 28,
  },
  name1: {
    width: 67,
    textAlign: "center",
    justifyContent:"center",
    alignItems:"center",
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
    borderColor: "#CBD5E0",
    borderWidth: 0.5,
  },

  viewDateTimeContainer: {
    display: "flex",
    flexDirection: "coloumn",
    alignItems: "flex-start",
    justifyContent: "space-around",
    margin: 30,
    borderWidth: 0.5,
    borderColor: "#CBD5E0",
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
    borderBottomColor: "#CBD5E0",
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  txtDate1: {
    textAlign: "left",
    display:"flex",justifyContent:"flex-start",alignItems:"flex-start",
    fontSize: 12,
    padding: 10,
    marginBottom:5,
    fontWeight:"400"
  },

  txtTime: {
    textAlign: "left",
    fontSize: 18,
    padding: 10,
  },

  txtSelectedDate: {
    textAlign: "left",
    fontSize: 12,
    fontWeight:"400",
    padding: 10,
  },

  viewTimePicker: {
    paddingBottom: 20,
  },
});

export default AcceptPatientSchedule;
