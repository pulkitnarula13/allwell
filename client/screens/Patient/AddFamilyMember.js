import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput, Button } from 'react-native-paper';
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
    const { userInfo } = useContext(AuthContext);




    const clearData = () => {
      setName('');
      setEmail('');
      setRelationship('');
      setMSP('');
      setbirthdate(undefined);
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
          
          <View style={styles.btnview}>
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
      }
});
export default AddFamilyMember