import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const AvailableDoctorCard = (props) => {
  console.log(props.item.image,"lele lun")
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Doctor-Info")}
      >
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:15}}>
        <Image
        source={{uri:props.item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.ratingContainer}>
        <Text>{props.item.rating}</Text>
        <Rating
        type='custom'

        ratingBackgroundColor="#74CBD4"
        ratingColor='#74CBD4'
          ratingCount={1}
          imageSize={15}
        />
      </View>
      </View>
      </TouchableOpacity>
      <Text style={{marginBottom:5}}>{props.item.name}</Text>
      
      <Text style={{marginBottom:5,fontWeight:"100"}}>{props.item.specialities}</Text>
      <Button style={{display:"flex",flexDirection:"row",}} >
              <Ionicons style={{marginRight:10}} name="location-outline" size={24} color="#74CBD4" />
              <Text style={{color:"black"}}>5Km</Text>
            </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    width:168.7,
    borderWidth:2,
    marginRight:11.3,
    borderColor:"#E2E8F0",
    borderRadius:8,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },
  image: {
    width: 100,
    height: 100,
    
    
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default AvailableDoctorCard;
