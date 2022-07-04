import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

const AvailableDoctorCard = ({ item, navigation}) => {
console.log(navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      >
      <View>
        <Image
          style=  {styles.image}
          source={item.image}
          resizeMode="center"
        />
      </View>
      </TouchableOpacity>
      <Text>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Text>{item.rating}</Text>
        <Rating
          type='star'
          ratingCount={5}
          imageSize={15}
        />
      </View>
      <Text>{item.speciality}</Text>
      <Text>Wait Time: {item.waitTime}</Text>
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
    background: "red",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default AvailableDoctorCard;
