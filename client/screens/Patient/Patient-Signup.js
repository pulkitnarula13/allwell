import React, { useState, createRef, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, TextInput, RadioButton } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import { DatePickerInput } from "react-native-paper-dates";

export default function PatientSignup() {
  const { isLoading, registerPatient } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState(undefined);
  const [healthNumber, setHealthNumber] = useState();
  const [gender, setGender] = useState();

  return (
    <View style={{ flex: 1, backgroundColor: "#ebf0f3" }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={name}
              onChangeText={(name) => setName(name)}
              underlineColorAndroid="#f000"
              placeholder="Full Name"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={email}
              onChangeText={(email) => setEmail(email)}
              underlineColorAndroid="#f000"
              placeholder="Email address"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={password}
              onChangeText={(password) => setPassword(password)}
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={healthNumber}
              onChangeText={(healthNumber) => setHealthNumber(healthNumber)}
              underlineColorAndroid="#f000"
              placeholder="Health Number"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionStyle}>
            <DatePickerInput
              locale="en"
              label="DOB"
              value={dob}
              onChange={(d) => setDOB(d)}
              inputMode="start"
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={confirmPassword}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              value={phone}
              style={styles.inputStyle}
              onChangeText={(phone) => setPhone(phone)}
              underlineColorAndroid="#f000"
              placeholder="mobile number"
              placeholderTextColor="#8b9cb5"
            />
          </View>

          <View>
            <RadioButton
              value="Male"
              status={gender === "Male" ? "checked" : "unchecked"}
              onPress={() => setGender("Male")}
              color="red"
            />
            <Text>Male</Text>
            <RadioButton
              value="Female"
              status={gender === "Female" ? "checked" : "unchecked"}
              onPress={() => setGender("Female")}
              color="red"
            />
            <Text>Female</Text>
          </View>

          <Button
            style={styles.buttonStyle}
            onPress={() =>
              registerPatient({
                name,
                email,
                dob,
                phone,
                password,
                healthNumber,
                gender,
              })
            }
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </Button>
          <Text style={styles.txt}>
            By signing up, you agree to Medico’s privacy policy
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  txt: {
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#d4d8db",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
  },
  link: {
    color: "black",
  },
});
