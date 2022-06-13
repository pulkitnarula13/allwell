import {View, Text,Image} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native'; 
import pic from '../assets/icon.png'


const DoctorInfoHome = () => {
  return (
    <View style={styles.viewcontainer}>
      <Text style={styles.heading}>Doctor Info</Text>
      <Image source={pic} style={{width:350,height:233,borderRadius:10, backgroundColor:'pink'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize:22,
    textAlign:'center',
    fontWeight:'700',
    lineHeight:28,
    // fontFamily:'Work Sans',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewcontainer:{
    backgroundColor:'#ffff',
    height:100,
    display:'flex',
    justifyContent:'center',
    flex:1
  }
});

export default DoctorInfoHome;