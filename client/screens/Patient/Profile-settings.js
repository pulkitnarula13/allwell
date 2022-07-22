import { View, Text, StyleSheet,Image, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Switch, Button } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import { StackActions } from "@react-navigation/native";


const PatientProfileSettings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const { logout } = useContext(AuthContext);

  const patientLogout = () => {
    logout(navigation);
  };

  return (
    <View>
      <View style={styles.info10}>
        <Text style={styles.infotext1}>Push notifications</Text>
        <Switch
        
          color="#74CBD4"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>
      <View style={{width:340,height:0,borderWidth:0.5,borderColor:"black",marginLeft:30,marginBottom:18}}></View>
    
      <TouchableOpacity onPress={()=>{navigation.navigate("Managefamilymembers")}}>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Manage Family Member</Text>
        <AntDesign  onPress={()=>{navigation.navigate("Managefamilymembers")}} name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <View style={{width:340,height:0,borderWidth:0.5,borderColor:"black",marginLeft:30,marginBottom:18}}></View>
      <TouchableOpacity onPress={()=>{navigation.navigate("FAQ-patient")}}>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>FAQ</Text>
        <AntDesign  name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>


      <View style={{width:340,height:0,borderWidth:0.5,borderColor:"black",marginLeft:30,marginBottom:18}}></View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Privacypolicy-patient")}}>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Privacy Policy</Text>
        <AntDesign   name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <View style={{width:340,height:0,borderWidth:0.5,borderColor:"black",marginLeft:30,marginBottom:18}}></View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Termsofuse-patient")}}>
      <View style={styles.info2}>
        <Text style={styles.infotext1}>Term of Use</Text>
        <AntDesign  name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <View style={{width:340,height:0,borderWidth:0.5,borderColor:"black",marginLeft:30,marginBottom:68}}></View>
      <View style={styles.buttonarea}>
        <Button
          style={styles.availablebtn}
          mode="contained"
          onPress={patientLogout}
          
        >
          <Image
                  style={styles.image2}
                  source={require("../../assets/icons/medico_icon-logIn.svg")}
                  resizeMode="cover"
                />
          <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Log Out</Text>
        </Button>
      </View>
      <View style={styles.buttonarea}>
        <Button
          style={styles.availablebtn1}
          mode="contained"
          onPress={() => console.log("Pressed")}
          
        >
          
          <Image
                  style={styles.image2}
                  source={require("../../assets/icons/medico_icon-delete.svg")}
                  resizeMode="cover"
                />
            
          <Text style={{color:"#74CBD4",fontSize:16,fontWeight:"600"}} onPress={()=>{
            Alert.alert(
              "Delete Account",
              "Do you want to delete your account?",
              [
                {
                  text: "Yes",
                  onPress: () => {Alert.alert("Account Deleted")
                  navigation.navigate("greeting");
                },
                  style: "cancel",
                },
                {
                  text: "No",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
              ],
              {
                cancelable: true,
                onDismiss: () =>
                  Alert.alert(
                    "This alert was dismissed by tapping outside of the alert dialog."
                  ),
              }
            );

          }}>Delete Account</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outerview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 46,
  },
  buttonarea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  image2:{
    width:20,
    height:22
  },
  availablebtn: {
    backgroundColor: "#74CBD4",
    borderRadius: 100,
    width: 315,
    height: 49,
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  availablebtn1: {
    backgroundColor: "#FCFCFC",
    borderRadius: 100,
    borderColor: "#74CBD4",
    width: 315,
    height: 49,
    borderWidth: 2,
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  info1: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 11,
    justifyContent: "space-between",
  },
  info10: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginTop:148,
    marginLeft: 33,
    marginBottom: 11,
    justifyContent: "space-between",
  },
  info2: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 11,
    justifyContent: "space-between",
  },
  infotext11: {
    width: 199,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  infotext1: {
    width: 195,
    height: 22,
    fontWeight: "500",

    fontSize: 17,
    lineHeight: 24,
  },
});
export default PatientProfileSettings;
