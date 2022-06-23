import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'

const AvailableDoctorCard = ({ item }) => {
  console.log(item, "PROPS");
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={item.image} />
      </View>
      <Text>{item.name}</Text>
      <Text>{item.rating}</Text>
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
  }
});


export default AvailableDoctorCard;