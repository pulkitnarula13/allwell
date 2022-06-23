import { useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";

const { width, height } = Dimensions.get("window");

const CreatingAccount2 = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  return (
    <KeyboardAvoidingView>
    <View>
      <ScrollView>
      <TextInput
        style={styles.inputbox1}
        mode="outlined"
        label="Firstname"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.inputbox}
        mode="outlined"
        label="Lastname"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
      />
      <TextInput
        style={styles.inputbox}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setemail(text)}
      />
      <TextInput
        style={styles.inputbox}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => setpassword(text)}
      />
      <TextInput
        style={styles.inputbox}
        mode="outlined"
        label="Confirm Password"
        value={confirmpassword}
        onChangeText={(text) => setconfirmpassword(text)}
      />
      <TextInput
        style={styles.inputboxlast}
        mode="outlined"
        label="Phone Number"
        value={phonenumber}
        onChangeText={(text) => setphonenumber(text)}
      />
      <View>
        <Text>By signing up, you agree to Medico’s privacy policy</Text>
      </View>
      </ScrollView>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputbox: {
    width: 256,
    height: 40,
    marginBottom: 19,
  },
  inputbox1: {
    width: 256,
    height: 40,
    marginTop: 37,
    marginBottom: 19,
  },
  inputboxlast: {
    width: 256,
    height: 40,
    marginBottom: 45,
  },
  textsize: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
  },
});

export default CreatingAccount2;

