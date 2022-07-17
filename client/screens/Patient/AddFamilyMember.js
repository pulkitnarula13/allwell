import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput, Button, RadioButton } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";




 const AddFamilyMember = (props)=> {
  console.log(props);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [relationship, setRelationship] = useState("");
    const [MSP, setMSP] = useState("");
    const [birthdate, setbirthdate] = useState(undefined);
    const [gender, setGender] = useState();

    const { userInfo } = useContext(AuthContext);




    const addMember = async () => {
      let data =  {
        name: name,
        email: email,
        dob:  birthdate,
        healthNumber: MSP,
        gender: gender,
        relationship: relationship,
        creatorPatient: userInfo.id,
        roles: 'Patient',
        profilePicture: "",
      }

      console.log(data);
  
      const response = axios.post(
        `${BASE_URL_DEV}/familyMember`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
    }

  return (
    <View style={styles.maxview}>
        
        <ScrollView>
        <View style={styles.overall}>
       <View style={styles.outerview}>
      <Text style={styles.profiletext}>Add  Family Member</Text>
      </View>
      <View style={styles.imageview}>
      <Image
            style={styles.imgstyle}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />

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
           {/* <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Birth Date"
            value={birthdate}
            onChangeText={(text) => setbirthdate(text)}
          /> */}
            <DatePickerInput
              locale="en"
              label="Date of Birth"
              outlineColor="black" activeOutlineColor="#74CBD4"
              mode={'outlined'}
              value={birthdate}
              onChange={(d) => setbirthdate(d)}
              inputMode="start"
              style={styles.inputDateStyle}
            />
          </View>
          <View style={styles.genderView}>
            <RadioButton
              value="Male"
              status={gender === "Male" ? "checked" : "unchecked"}
              onPress={() => setGender("Male")}
              color="#74CBD4"
            />
            <Text>Male</Text>
            <RadioButton
              value="Female"
              status={gender === "Female" ? "checked" : "unchecked"}
              onPress={() => setGender("Female")}
              color="#74CBD4"
              uncheckedColor='#74CBD4'
            />
            <Text>Female</Text>
          </View>
          <View style={styles.btnview}>
          <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#FCFCFC",
                width: 150,
                height: 45,
                justifyContent: "center",
                marginRight:30,
                borderColor:"#000000",
                borderWidth:1
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Remove
            </Button>
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                width: 150,
                height: 45,
                justifyContent: "center",
              }}
              mode="contained"
              // onPress={() =>  props.navigation.navigate('Home')}
              onPress={addMember}
              
            >
              Add
            </Button>
          </View>
          </ScrollView>
          

    </View>
  )
}
const styles = StyleSheet.create({
    overall:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    btnview:{
        display:"flex",
        flexDirection:"row"
    },
    maxview:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    outerview:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:38,
        marginBottom:46
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
    imageview:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:11
    },
    profiletext:{
        fontSize:24,
        fontWeight:"700",
        lineHeight:36,
        textAlign:"center"
     },
     imgstyle: {
        width: 159,
        height: 159,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
      },
    genderView: {
      display: 'flex',
      flexDirection: 'row',
    }
});
export default AddFamilyMember