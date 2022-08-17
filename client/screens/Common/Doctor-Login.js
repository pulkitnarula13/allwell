import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";

export default function DoctorLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {isLoading, doctorLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcometext}>Welcome Back, Doctor</Text>
      <StatusBar style="auto" />
<View style={styles.idcontainer}>
      <Text style={styles.ids}>ID</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholder="username@mail.com"
          placeholderTextColor="#718096"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      </View>
      <View style={styles.idcontainer}>
      <Text style={styles.ids}>PASSWORD</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="********"
          placeholderTextColor="#718096"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
       </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("forgot-password")}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <View style={styles.btn1} >
      <Button title="Login" color="white" onPress={() => doctorLogin({
        email, password
      }, navigation)}>
      </Button>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    width:257,
    height:40,
    backgroundColor:"#E2E8F0"
  },
  btn1:{
    width:257,
    height:40,
    backgroundColor:"#74CBD4",
    borderRadius:8
    
  },
  welcometext:{
    marginTop:97,
    marginLeft:67,
    fontSize:24,
    lineHeight:29.05,
    marginBottom:51
  },
  idcontainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 256,
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    width:279,
    borderRadius:8,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"#E2E8F0",
    flex: 1,
    justifyContent:"center",
    padding: 10,
    marginLeft: 20,
  },
  ids: {
    marginBottom: 15,
    marginLeft: -200,
    fontSize: 14,
  },
  forgot_button: {
    height: 30,
    marginBottom: 48,
    marginLeft:65,
    fontWeight:"700",
    fontSize:14
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#bbd0d8",
  },
});
