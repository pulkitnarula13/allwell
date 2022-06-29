import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useState } from "react";
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
  {
    name: "Fever3",
    image: "../../assets/icon.png",
  },
];

const DATA1 = [
  {
    name: "Stomach Pain",
    image: "../../assets/icon.png",
  },
  {
    name: "Congestion",
    image: "../../assets/icon.png",
  },
  {
    name: "Fever1",
    image: "../../assets/icon.png",
  },
  {
    name: "Fever2",
    image: "../../assets/icon.png",
  },
];

const Item = ({ name, image }) => (
  <View style={styles.item}>
    <Image
      style={styles.image2}
      source={require("../../assets/icon.png")}
      resizeMode="contain"
    />
    <Text style={styles.name1}>{name}</Text>
  </View>
);

const Item12 = ({ name, image }) => (
  <View style={styles.item}>
    <Image
      style={styles.image2}
      source={require("../../assets/icon.png")}
      resizeMode="contain"
    />
    <Text style={styles.name1}>{name}</Text>
  </View>
);

const ChooseSymptoms = () => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  const [image1, setimage1] = useState(
    "/Users/kapilthaman/Documents/GitHub/allwell/client/assets/icon.png"
  );
  return (
    <View style={styles.outerview}>
      <View style={styles.innerview}>
        <Text style={styles.text1}>Choose Your Symptoms</Text>
      </View>
      <View style={styles.innerview1}>
        <Image
          style={{ width: 285, height: 193 }}
          source={{ uri: image1 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <FlatList
          style={styles.flatview}
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={styles.flatview1}
          horizontal={true}
          data={DATA1}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.buttonview}>
          <Button
            style={{
              marginBottom: 5,
              borderRadius: 10,
              backgroundColor: "#D9D9D9",
              width: 302,
              height: 45,
              justifyContent: "center",
            }}
            mode="contained"
            // onPress={changepage}
            onPress={() => console.log("Pressed")}
          >
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonview: {
    display: "flex",
    alignItems: "center",
  },

  outerview: {
    display: "flex",
    flex: 1,
  },
  flatview: {
    height: 110,
    marginRight: 36,
    marginLeft: 36,
  },
  flatview1: {
    height: 110,
    marginRight: 36,
    marginLeft: 36,
    marginBottom: 58,
  },
  name1: {
    width: 67,
    textAlign: "center",
    marginBottom: 10,
  },
  image2: {
    width: 70,
    height: 70,
    marginRight: 28,
  },
  innerview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 67,
  },
  innerview1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 33,
  },
  text1: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21.78,
    marginTop: 30,
    marginBottom: 67,
  },
});
export default ChooseSymptoms;
