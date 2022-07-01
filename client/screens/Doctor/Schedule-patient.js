import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

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

const Schedulepatient = () => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <View style={styles.outerview1}>
      <ScrollView>
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
        <Text style={styles.TimeSlot}>Select a Time Slot</Text>
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
      </ScrollView>
    </View>
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
});

export default Schedulepatient;
