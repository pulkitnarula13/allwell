import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

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

const AcceptPatientSchedule = () => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

  // Date Time Picker 
  // (Ref:- https://github.com/react-native-datetimepicker/datetimepicker#usage)
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollView>
      <View style={styles.outerview1}>
        
        <View style={styles.outerview}>
          <Text style={styles.text1}>Schedule Patient</Text>
        </View>

        <View style={styles.innerview}>
          <Text style={styles.text2}>Patient Name</Text>

          <View style={styles.text3}>
            <Text>Request Time: 11:11am</Text>
            <Text>06/17/2022</Text>
          </View>

          <Text style={styles.datandtime1}>Symptoms</Text>

          <View style={styles.flatlistView}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          </View>

          <Text style={styles.description}>More Description</Text>
          <Text style={styles.lorem1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique minus quibusdam facilis nobis ipsum nihil consequuntur
            aperiam vel! Consequuntur officia itaque pariatur dolor qui vitae
            dolore eos atque? Neque!
          </Text>

        </View>
        {/* Inner view ends here */}

        <View style={styles.viewSchedulerContainer}>
          <View style={styles.viewDateTimeContainer}>
            <View style={styles.viewDate}>
              <Text style={styles.textDatePicker} onPress={showDatepicker}>Date Picker</Text>
            </View>

            <View style={styles.viewTime}>
              <Text style={styles.textTimePicker} onPress={showTimepicker}>Time Picker</Text>
            </View>
          </View>

          <View style={styles.viewDateTimePicker}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          </View>

          <Text style={styles.textSelected}>selected: {date.toLocaleString()}</Text>

        </View>




        <View>



        </View>

        <View style={styles.buttons}>
          <Button
            style={styles.availablebtn1}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Decline
          </Button>
          <Button
            style={styles.availablebtn2}
            mode="contained"
            onPress={() => console.log("Pressed")}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },



  viewDateTimePicker: {
    textAlign: "center",
    paddingRight: 150
  },

  textSelected: {
    display: "block",
    
  }

});

export default AcceptPatientSchedule;