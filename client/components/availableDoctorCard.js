import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'
import { Rating } from 'react-native-ratings';

const AvailableDoctorCard = ({ item }) => {
  console.log(item, "PROPS");
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} 
          source={item.image}
          resizeMode="center"
           />
      </View>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 148,
    height: 162,
    background: "red"
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row"
  }
});


export default AvailableDoctorCard;