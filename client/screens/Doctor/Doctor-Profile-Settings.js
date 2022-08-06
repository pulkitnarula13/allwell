import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Switch, Button } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";

const DoctorProfileSettings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const { logout } = useContext(AuthContext);

  const doctorLogout = () => {
    logout(navigation);
    navigation.navigate("GreetingPage");
  };

  return (
    <View>
      <View style={styles.outerview}>
        <Text style={styles.profiletext}>Profile</Text>
      </View>

      {/* Push notification toggle */}
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Push notifications</Text>
        <Switch
          color="#74CBD4"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>

      {/* Touch Id */}
      {/* <View style={styles.info1}>
        <Text style={styles.infotext1}>Touch ID</Text>
        <AntDesign name="right" size={24} color="black" />
      </View> */}

      {/* FAQ button */}
      <TouchableOpacity onPress={()=>{navigation.navigate("FAQDoctors")}}>
        <View style={styles.info1}>
          <Text style={styles.infotext1}>FAQ</Text>
            <Image style={styles.rightArrow} source={require("../../assets/new_icons/right.png")} />
        </View>
      </TouchableOpacity>

      {/* Privacy Policy button */}
      <TouchableOpacity onPress={()=>{navigation.navigate("PrivacyPolicyDoctors")}}>
        <View style={styles.info1}>
            <Text style={styles.infotext1}>Privacy Policy</Text>
            <Image style={styles.rightArrow} source={require("../../assets/new_icons/right.png")} />
        </View>
      </TouchableOpacity>

      {/* Terms of Use button */}
      <TouchableOpacity onPress={()=>{navigation.navigate("TermsDoctors")}}>
        <View style={styles.info2}>
          <Text style={styles.infotext1}>Terms of Use</Text>
          <Image style={styles.rightArrow} source={require("../../assets/new_icons/right.png")} />
        </View>
      </TouchableOpacity>

      <View style={styles.buttonView}>

        <View style={styles.buttonarea}>
          <Button
            style={styles.availablebtn}
            mode="contained"
            onPress={doctorLogout}
            color="#FCFCFC"
          >
            <Image
                  style={styles.image2}
                  source={require("../../assets/icons/medico_icon-logIn.svg")}
                  resizeMode="cover"
                />
          <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Log Out</Text>
          </Button>
        </View>

        <View style={styles.buttonarea} onPress={() => console.log("Pressed")}>
        <Button
          style={styles.availablebtn1}
          mode="contained"
          
          
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
                  navigation.navigate("GreetingPage");
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
    </View>
  );
};
const styles = StyleSheet.create({
  rightArrow: {
    width: 24,
    height: 24,
  },
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
  buttonView: {
    marginTop: 50,
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
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
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 17,
    color: "#74CBD4",
  },
  info1: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 29,
    justifyContent: "space-between",
  },
  info2: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 13,
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
  image2:{
    width:20,
    height:22
  },
});
export default DoctorProfileSettings;
