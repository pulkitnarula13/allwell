import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";



 const AddFamilyMember = (props)=> {
  console.log(props);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ relationship, setRelationship ] = useState("");
    const [ MSP, setMSP ] = useState("");
    const [ birthdate, setbirthdate ] = useState(undefined);
    const [ profilePicture, setProfilePicture ] = useState("");
    const { userInfo } = useContext(AuthContext);

    // open image gallery
    const openimagelib = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePicture({ base64: result.base64, uri: result.uri });
        console.log(profilePicture, "selected Family Member Profile Picture");
      }
    };



    // function for cancel Button
    const clearData = () => {
      setName('');
      setEmail('');
      setRelationship('');
      setMSP('');
      setbirthdate(undefined);
      setProfilePicture('');
      props.navigation.navigate("Doctor-Connect");
    }

    const addMember = async () => {

      console.log(userInfo, "userInfo");
  
      const response = axios.put(
        `${BASE_URL_DEV}/patients/family/${userInfo.id}`,
        {
          name: name,
          email: email,
          dob:  birthdate,
          healthNumber: MSP,
          relationship: relationship,
          profilePicture: profilePicture.base64,
          createdBy: userInfo.id
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      clearData();
    }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "100"}
      enabled={true}
      keyboardVerticalOffset={10}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <View style={styles.maxview}>
          <ScrollView   showsVerticalScrollIndicator={false}>
            <View style={styles.overall}>
              <View style={styles.outerview}>
                <Text style={styles.profiletext}>Add Family Member</Text>
              </View>
              
              <View style={styles.profileImageView}>
      {/* <Image
            style={styles.imgstyle}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          /> */}

              {/* {!profilePicture ? ( */}
                <Avatar.Text
                  style={{ backgroundColor: "#74CBD4" }}
                  size={140}
                  label={name[0]}
                  color="#fff"
                />
              {/* ) : ( */}
                {/* <Image
                  style={styles.imgstyle}
                  source={{ uri: `${profilePicture.uri}` }}
                /> */}
              {/* )} */}

        {/* <Button
          style={styles.editicon}
          onPress={openimagelib}
        >
          <Feather name="edit-3" size={24} color="black" />
        </Button> */}

      </View>
      <TextInput
            style={styles.inputbox1}
            mode="outlined"
            label="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
         
          
          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Relationship with Member"
            value={relationship}
            onChangeText={(text) => setRelationship(text)}
          />
          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Add MSP Number"
            value={MSP}
            onChangeText={(text) => setMSP(text)}
          />

          <View style={styles.datePickerView}>
            <DatePickerInput
              locale = 'en'
              label="Date of Birth"
              outlineColor="black" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              value={birthdate}
              onChange={(d) => setbirthdate(d)}
              inputMode="start"
              style={styles.inputDateStyle}
            />
            </View>


          </View>
          
          <View style={styles.btnView}>
          <Button
              style={styles.cancelBtn}
              mode="contained"
              onPress={clearData}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </Button>
            <Button
              style={styles.addBtn}
              mode="contained"
              // onPress={() =>  props.navigation.navigate('Home')}
              onPress={addMember}
              
            >
              <Text style={styles.addBtnText}>Add</Text>
            </Button>
          </View>
          </ScrollView>

    </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({

    container: {
      flex: 1
    },

    overall:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    btnView:{
        display:"flex",
        flexDirection:"row",
        paddingTop: 20,
        marginBottom: 20
    },
    maxview:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    outerview:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        marginBottom: 20
    },
    inputbox: {
        width: 256,
        height: 40,
        marginBottom: 19,
      },
      inputbox1: {
        width: 256,
        height: 40,
        marginBottom: 19,
      },
      datePickerView: {
        width: 256,
        height: 40,
        marginBottom: 40,
      },
    profileImageView:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
    },
    profiletext:{
        fontSize:24,
        fontWeight:"700",
        lineHeight:36,
        textAlign:"center"
     },
     imgstyle: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#D9D9D9",
        borderRadius: 100,
      },
      cancelBtn: {
          borderRadius: 100,
          backgroundColor: "#FCFCFC",
          width: 150,
          height: 45,
          justifyContent: "center",
          marginRight:30,
          borderColor:"#74CBD4",
          borderWidth:1,
      },

      cancelBtnText: {
        color: '#74CBD4',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },

      addBtn: {
        borderRadius: 100,
        backgroundColor: "#74CBD4",
        width: 150,
        height: 45,
        justifyContent: "center",
      },

      addBtnText: {
        color: '#ffffff',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },

      editicon: {
      position: "absolute",
      top: 120,
      left: -20,
    },
});
export default AddFamilyMember