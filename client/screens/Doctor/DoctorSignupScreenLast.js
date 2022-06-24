import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const DoctorSignupScreenLast = ()=> {
  return (
    <View style={styles.outerview}>
       <Image
      style={styles.image2}
      source={require("../../assets/icon.png")}
      resizeMode="contain"
    />
    <Text style={styles.text1}>Sign up compeleted</Text>
    <Text style={styles.text2}>You can now set up your profile after log in your account</Text>
    <Button
        style={{
          marginBottom: 5,
          backgroundColor: "#D9D9D9",
          width: 315,
          height: 49,
          justifyContent: "center",
        }}
        mode="contained"
      >
        Go To Log In
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  outerview:{
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    flex:1
  },
  image2:{
    width:99,
    height:99,
    marginBottom:45
  },
  text1:{
    fontWeight:"600",
    fontSize:24,
    lineHeight:29.5
  },
  text2:{
    width:260,
    height:50,
    textAlign:"center",
    marginTop:48,
    marginBottom:28,
    fontWeight:"400",
    fontSize:16,
    lineHeight:19.36
  }
})


export default DoctorSignupScreenLast