import { View, Button, StyleSheet } from "react-native";
import React from "react";
import GoogleSignup from "../../components/GoogleSignup";
import { Divider } from "react-native-paper";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Greeting = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.greetme} variant="displayLarge">Greeting! <MaterialCommunityIcons name="hand-wave"color="#FFD700" size={25}/></Text>
        <Text style={style.info1} variant="displaySmall">
          With Medico, you can connect to the doctor anytime you want 24/7.
        </Text>
      </View>
      <View style={style.button}>
        <Button
        style={{fontSize:14,lineHeight:33}}

        color="white"
          title="Signup with Email"
          onPress={() => navigation.navigate("Doctor-Patient-Selection-Signup")}
        />
        </View>
        <View style={style.button1}>
      <GoogleSignup />
      </View>
      <View style={style.button1}>
        <Button
        color="#74CBD4"
          title="Login"
          onPress={() => navigation.navigate("Doctor-Patient-Selection-Login")}
        />
        </View>
        <Divider />
        {/* <TouchableOpacity style={style.guest}>
          <Text> Continue as Guest</Text>
        </TouchableOpacity> */}
     
    </View>
  );
};

const style = StyleSheet.create({
  info1:{
    fontWeight:"400",
    fontSize:16,
    lineHeight:24,
    width:311,
    height:48, 
     marginLeft:51,
     
  },
  greetme:{
    fontWeight:"700",
    marginTop:122,
    fontSize:24,
    lineHeight:36,
    marginLeft:51,
    marginBottom:14
  },
  container: {
    flex: 1,
    
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  button: {
    width: 315,
    height: 49,
    display: "flex",
    flexDirection: "column",
    
    marginLeft:40,
    marginTop:70,
    backgroundColor:"#74CBD4",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
  },
  button1: {
    width: 315,
    height: 49,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 30,
    marginLeft:40,
    borderWidth:1,
    borderColor:"#74CBD4",
    backgroundColor:"white",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
  },
  guest: {
    textAlign: "center",
  },
});

export default Greeting;
