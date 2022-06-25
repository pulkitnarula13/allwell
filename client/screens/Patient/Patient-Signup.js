import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function PatientSignup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [Password, setUserPassword] = useState("");
  const [CPassword, setUserCPassword] = useState("");
  const [Phone, setUserPhone] = useState("");


  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity style={styles.arrow}>
          <Image
            style={styles.image2}
            source={require('../../assets/arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>Creating account</Text>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(FirstName) => setFirstName(FirstName)}
              underlineColorAndroid="#f000"
              placeholder="First Name"
              placeholderTextColor="#718096"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(LastName) => setLastName(LastName)}
              underlineColorAndroid="#f000"
              placeholder="Last Name"
              placeholderTextColor="#718096"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Email address"
              placeholderTextColor="#718096"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#718096"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(CPassword) =>
                setUserCPassword(CPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#718096"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.SectionStyle2}>
              <TextInput
                style={[styles.inputStyle2, { flex: 2 }]}
                onChangeText={(Phone) => setUserPhone(Phone)}
                underlineColorAndroid="#f000"
                placeholder="+1"
                placeholderTextColor="#718096"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.SectionStyle1}>
              <TextInput
                style={[styles.inputStyle1, { flex: 10 }]}
                onChangeText={(Phone) => setUserPhone(Phone)}
                underlineColorAndroid="#f000"
                placeholder="mobile number"
                placeholderTextColor="#718096"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.txt}>By signing up, you agree to Medico’s privacy policy</Text>
          <Text style={styles.txt1}>Already have an account? Sign in</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  SectionStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: "287px",
    height: "40px",
    marginLeft: "20px",
    marginTop: "12px",
    borderColor: "#e2e8f0",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: "1px",
  },

  SectionStyle1: {
    alignItems: 'flex-start',
    padding: 0,
    width: 180,
    height: 40,
    marginLeft: 20,
    marginTop: 12,
    borderColor: "#e2e8f0",
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 1,
  },

  SectionStyle2: {

    alignItems: 'flex-start',
    padding: 0,
    width: 90,
    height: 40,
    marginLeft: 20,
    marginTop: 12,
    borderColor: "#e2e8f0",
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
  },

  txt: {
    width: "289px",
    height: "22px",
    marginLeft: "30px",
    marginTop: "12px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "22px",
    alignItems: "center",
    color: "#000000",
  },

  head: {
    Color: "#000000",
    width: "195px",
    height: "29px",
    marginTop: "74px",
    marginLeft: "63px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex",
    textAlign: "center",
    letterSpacing: "-0.02em",
  },

  buttonStyle: {
    marginLeft: "3%",
    marginRight: "0%",
    marginTop: "7%",
    marginBottom: "0%",
    width: "300px",
    height: "40px",
    backgroundColor: "#E2E8F0",
    borderRadius: "8px",
  },

  buttonTextStyle: {
    display: "flex",
    alignItems: "center",
    padding: "0px",
    lineHeight: "8px",
    width: "80px",
    height: "24px",
    marginLeft: "105px",
    marginTop: "10px",
  },

  inputStyle: {
    position: "absolute",
    height: "22px",
    left: "8px",
    right: "40px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
  },

  link: {
    color: "000000",
  },

  arrow: {
    position: "absolute",
    top: 70 + getStatusBarHeight(),
    left: 4,

  },

  image2: {
    width: "37px",
    height: "30px",
  },

  txt1: {
    width: "181px",
    height: "22px",
    marginLeft: "70px",
    marginTop: "168px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },

  inputStyle1: {

    height: 22,
    marginLeft: 8,
    marginRight: 40,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
  },

  inputStyle2: {
    height: 22,
    left: 8,
    right: 40,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },


});
