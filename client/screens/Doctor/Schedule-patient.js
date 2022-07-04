import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

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

const SchedulePatient = () => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <ScrollView>
      <View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default SchedulePatient;
