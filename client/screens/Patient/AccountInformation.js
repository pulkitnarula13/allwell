import { View, Text,StyleSheet,Image ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { TextInput,Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";

 const AccountInformation = ({navigation})=> {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [MSP, setMSP] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [housenumber, sethousenumber] = useState("");
    const [City, setCity] = useState("");
    const [Pincode, setPincode] = useState("");
    const [shortbio, setshortbio] = useState("");
    const [image1, setimage1] = useState("../assets/icon.png");
    const [changedImage, setchangedImage] = useState("");


    const openimagelib = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setimage1(result.uri);  
        props.setFirstStepperData(result);  
      }
      
    };


  return (
    <View style={styles.maxview}>
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.overall}>
      
      <View style={styles.imageview}>
      <TouchableOpacity onPress={openimagelib}>
          <Image
            style={styles.imgstyle}
            source={{ uri: image1 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      
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
          <View style={{display:"flex",flexDirection:"row",maxWidth:287}}>

           <TextInput

            style={styles.inputboxhouse}
            mode="outlined"
            label="House Number"
            value={housenumber}
            onChangeText={(text) => sethousenumber(text)}
          />
          <TextInput
            style={styles.inputboxhouse}
            mode="outlined"
            label="City"
            value={City}
            onChangeText={(text) => setCity(text)}
          />
          </View>

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Pin Code"
            value={Pincode}
            onChangeText={(text) => setPincode(text)}
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
            label="Phone Number"
            value={phonenumber}
            onChangeText={(text) => setphonenumber(text)}
          />
          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Add MSP Number"
            value={MSP}
            onChangeText={(text) => setMSP(text)}
          />
           <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Birth Date"
            value={birthdate}
            onChangeText={(text) => setbirthdate(text)}
          />
          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Short Bio"
            value={shortbio}
            multiline={true}
            onChangeText={(text) => setshortbio(text)}
          />
          </View>
          <View style={styles.btnview}>
          <Button
              style={{
                borderRadius: 100,
                backgroundColor: "#FCFCFC",
                width: 150,
                height: 49,
                justifyContent: "center",
                marginRight:29,
                borderColor:"#74CBD4",
                borderWidth:2
              }}
              labelStyle={{color:"#74CBD4",fontSize:16,fontWeight:"600"}}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Cancel
            </Button>
            <Button
              style={{
                borderRadius: 100,
                backgroundColor: "#74CBD4",
                width: 150,
                height: 49,
                justifyContent: "center",
                borderColor:"#74CBD4",
                borderWidth:2
              }}
              labelStyle={{color:"white",fontSize:16,fontWeight:"600"}}
              mode="contained"
              onPress={() =>navigation.navigate("PatientProfile") }
            >
              Save
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
        flexDirection:"row",
        marginBottom:50,
        justifyContent:"center",
        alignItems:"center"
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
        width: 287,
        height: 40,
        marginBottom: 19,
      },
      inputboxhouse: {
        width: 287,
        height: 40,
        marginBottom: 19,
        marginRight:10,
        display:"flex",
        flex:1
      },
      inputbox1: {
        width: 287,
        height: 40,
        marginBottom: 19,
      },
    imageview:{
        display:"flex",
        marginTop:23,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:24
    },
    profiletext:{
        fontSize:24,
        fontWeight:"700",
        lineHeight:36,
        textAlign:"center"
     },
     imgstyle: {
        width: 95,
        height: 95,
        backgroundColor: "white",
        borderWidth:2,
        borderColor:"#D9D9D9",
        borderRadius: 10,
      },
});
export default AccountInformation