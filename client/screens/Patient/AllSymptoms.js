import { View, Text, Image } from "react-native";
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";

export default function AllSymptoms() {
    const DATA = [
        {
          name: "Cough",
          image: "../../assets/icon1.png",
        },
        {
          name: "Muscle Cramp",
          image: "../../assets/icon2.png",
        },
        {
          name: "Sore Throad",
          image: "../../assets/icon3.png",
        },
        {
          name: "Stomach Pain",
          image: "../../assets/icon4.png",
        },
        {
            name: "Stomach Pain1",
            image: "../../assets/icon5.png",
          },
          {
            name: "Congestion1",
            image: "../../assets/icon6.png",
          },
          {
            name: "Fever1",
            image: "../../assets/icon7.png",
          },
          {
            name: "Fever2",
            image: "../../assets/icon8.png",
          },
          {
            name: "Fever3",
            image: "../../assets/icon9.png",
          },
          {
            name: "Cough1",
            image: "../../assets/icon11.png",
          },
          {
            name: "Muscle1 Cramp",
            image: "../../assets/icon21.png",
          },
          {
            name: "Sore1 Throad",
            image: "../../assets/icon31.png",
          },
      ];

      const Item = ({ name, image }) => (
        <View style={styles.item}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
          <Text style={styles.name1}>{name}</Text>
        </View>
      );

      const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;


  return (
    <View style={styles.mainscroll}>
     <View style = {styles.mainflat}>
     <FlatList
            style={{ height: 417, marginRight: 36, marginLeft: 36 }}
            horizontal={false}
            data={DATA}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          />
          </View>
          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <View style={styles.btn}>
          <Button color="white" onPress={()=>{
        console.log("continue pressed")
          }}>Continue</Button>
          </View>
          </View>

    </View>
  )
}
const styles = StyleSheet.create({
    mainscroll:{
        display:"flex",
        flex:1
    },
    btn:{
        width:257,
        height:40,
        backgroundColor:"#74CBD4",
        borderRadius:8
    },
    item:{
        marginRight:10,
        marginBottom:22
    },
    mainflat:{
        marginTop:38,
        marginBottom:110,
        height:417,
        justifyContent:"center"
,
alignItems:"center"    },
name1:{
textAlign:"center"
},
})