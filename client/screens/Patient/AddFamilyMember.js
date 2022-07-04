import { View, Text,StyleSheet,Image ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { TextInput,Button } from 'react-native-paper';

 const AddFamilyMember = ()=> {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setemail] = useState("");
    const [Relationship, setRelationship] = useState("");
    const [MSP, setMSP] = useState("");
    const [birthdate, setbirthdate] = useState("");
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
            label="Relationship"
            value={Relationship}
            onChangeText={(text) => setRelationship(text)}
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
              onPress={() => console.log("Pressed")}
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
});
export default AddFamilyMember