import React, { useState, createRef, useContext } from "react";
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import { Button, TextInput, RadioButton } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import { DatePickerInput } from "react-native-paper-dates";

export default function PatientSignup({ navigation }) {
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
              outlineColor="gray" activeOutlineColor="#74CBD4"
              label={'Name'}
              value={name}
              mode={'outlined'}
              onChangeText={(name) => setName(name)}
              underlineColorAndroid="#f000"
              placeholder="Full Name"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              outlineColor="gray" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              label={'Email'}
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
              outlineColor="gray" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              label='Health Number'
              value={healthNumber}
              onChangeText={(healthNumber) => setHealthNumber(healthNumber)}
              underlineColorAndroid="#f000"
              placeholder="Health Number"
              placeholderTextColor="#8b9cb5"
            />
          </View>
          <View style={styles.SectionDateStyle}>
            <View style={{ width: '100%' }}>
              <DatePickerInput
                locale="en"
                label="Date of Birth"
                outlineColor="black" activeOutlineColor="#74CBD4"
                mode={'outlined'}
                value={dob}
                onChange={(d) => setDOB(d)}
                inputMode="start"
                style={styles.inputDateStyle}
              />
            </View>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              label={'Password'}
              outlineColor="black" activeOutlineColor="#74CBD4"
              mode={'outlined'}
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
              outlineColor="gray" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              label={'Confirm Password'}
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
              label={'Phone'}
              outlineColor="gray" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              style={styles.inputStyle}
              onChangeText={(phone) => setPhone(phone)}
              underlineColorAndroid="#f000"
              placeholder="Contact Number"
              placeholderTextColor="#8b9cb5"
            />
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
              }, navigation)
            }
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </Button>
          <Text style={styles.txt}>
            By signing up, you agree to <Text style={{ color: "#74CBD4" }}>Medico’s privacy policy</Text>
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 35,
    paddingTop: 30
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  SectionDateStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    //width: 345,
  },
  SectionCheckBoxStyle: {
    flexDirection: "row",
    height: 50,
    marginLeft: 35,
    marginRight: 35,
    alignItems: 'center'
  },
  txt: {
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#74CBD4",
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
    padding: 0,

  },
  inputDateStyle: {
    width: 200,
  },
  link: {
    color: "black",
  },
});
