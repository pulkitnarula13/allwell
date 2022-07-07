import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { FlatList } from "react-native";
import {DATA} from '../constants/Doctor-inboxvalues'

const Patientinboxdata = () => {
  

  const Item = ({ name,image,date,info }) => (
    <View>
      <TouchableOpacity
      onPress={() => console.log("pressed")}
      >
    <View style={styles.main}>
      <Text style={styles.date1}>{date}</Text>
    <View style={styles.mainouter}>
    
      <View style={styles.inner}>
        <View>
          <Image
            style={styles.image2}
            source={require("../assets/icon.png")}
            resizeMode="contain"
          />
          <Text style={{textAlign:"center"}}> {name}</Text>
        </View>
        <View style={{marginLeft:30}}>
          <View style={{display:"flex",flexDirection:"row"}}>
            <Text>{date}</Text>
            <Rating
            style={{marginLeft:13}}
        type='star'
        ratingCount={5}
        imageSize={15}
      />
          </View>
          <View style={styles.down}><Text>{info}</Text></View>
         
        </View>
      </View>
    </View>
  </View>
  </TouchableOpacity>
  </View>
  );


  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.image} date = {item.date} info={item.info} />
);
  return (

    <FlatList
    horizontal = {false}
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.name}
    
  />
  );
};
const styles = StyleSheet.create({
  date1:{
    fontSize:16,
    fontWeight:"600",
    lineHeight:24,
    marginTop:17,
    marginBottom:7
  },
  down:
  {
    width:180,
    height:60,
    marginTop:19.71
  },
  mainouter: {
    display: "flex",
    width: 343,
    height: 156,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 30,
  },
  main: {
    display: "flex",
    flex: 1,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    
  },
  image2:{
    width:62,
    height:62
  }
});
export default Patientinboxdata;
