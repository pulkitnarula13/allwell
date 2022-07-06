import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

const AvailableDoctorCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Doctor-Info")}
      >
      <View>
        <Image
          style=  {styles.image}
          source={props.item.image}
          resizeMode="center"
        />
      </View>
      </TouchableOpacity>
      <Text>{props.item.name}</Text>
      <View style={styles.ratingContainer}>
        <Text>{props.item.rating}</Text>
        <Rating
          type='star'
          ratingCount={5}
          imageSize={15}
        />
      </View>
      <Text>{props.item.speciality}</Text>
      <Text>Wait Time: {props.item.waitTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 148,
    height: 162,
    backgroundColor: "red",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default AvailableDoctorCard;
