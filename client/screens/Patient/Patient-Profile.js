import { View, Text ,StyleSheet, Image,Dimensions} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL_DEV } from "@env";
import { AuthContext } from '../../Context/AuthContext';

const  PatientProfile = (props)=> {
  
  const { userInfo } = useContext(AuthContext);

  const [PatientProfileData, setPatientProfileData] = useState();

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async () => {
    try {
  const userdata = await axios.get(
    `${BASE_URL_DEV}/patients/${userInfo.id}`,
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
  );

  console.log(userdata.data.data)
  setPatientProfileData(userdata.data.data);
    
  }catch (error) {
    console.log(error);
  }
};

  return (

    <View style={styles.allview}>
        <View style={styles.main}>
        <View style={styles.profileheading}>
          <View style={{display:"flex",flexDirection:"row"}}>
      <Text style={styles.profiletext}>Profile</Text>
      <Button  style={styles.btnsetting1} onPress={() => props.navigation.navigate("AccountInformation")}>
        <Feather name="edit-3" size={24} color="black" />
        </Button>
        </View>
        <View>
      <Button style={styles.btnsetting} onPress={() => props.navigation.navigate("Patient-Profile-Settings")}>
        <Feather name="settings" size={24} color="black" />
        </Button>
        </View>
    
      </View>
      
      </View>
      <View style={styles.imagecenter}>
      <Image
      style={styles.image2}
      source={require("../../assets/icon.png")}
      resizeMode="contain"
    />
      </View>
      <View style={styles.info1}>
      <Text style={styles.infotext1}>Email</Text>
      <Text style={styles.infotext11}>{PatientProfileData?.email}</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>Mobile Number</Text>
      <Text style={styles.infotext11}>+1 123 456 7890</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>MSP Number</Text>
      <Text style={styles.infotext11}>{PatientProfileData?.healthNumber}</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext2}>Address</Text>
      <Text style={styles.infotext11}>100 W 49th Ave, Vancouver, BC V5Y 2Z6</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>Date of birth</Text>
      <Text style={styles.infotext11}>{PatientProfileData?.dob}</Text>
      </View>
      <View style={styles.info3}>
      <Text style={styles.infotext13}>Short Bio</Text>
      <Text style={styles.infotext12}>Viverra orci ut in quis est pretium id. Cursus purus ut fames feugiat feugiat neque sed eu ridiculus.</Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    main:{display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
    
},
    btnsetting:{
        
    },
    
    allview:{
        paddingLeft:53,
        paddingRight:53
    },
    infotext1:{
            width:118,
            height:22,
            fontWeight:"700",
            fontSize:16,
            lineHeight:22
    },
    infotext13:{
        width:118,
        height:22,
        fontWeight:"700",
        fontSize:16,
        lineHeight:22,
        marginBottom:20

    },
    infotext2:{
        width:118,
        height:44,
        fontWeight:"700",
        fontSize:16,
        lineHeight:22
    },
    infotext11:{
        width:199,
        fontWeight:"400",
        fontSize:16,
        lineHeight:22
    },
    infotext12:{
        width:302,
        height:111,
        fontWeight:"400",
        fontSize:16,
        lineHeight:22
    },
    profileheading:{
      
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:38,
        marginBottom:26,
        
    },
    imagecenter:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    profiletext:{
       fontSize:24,
       fontWeight:"700",
       lineHeight:36,
       textAlign:"center",
       width:75
       
       
    },
    image2: {
        width: 159,
        height: 159,
        marginBottom:39
      },
      info1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
      },
      info2:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:26
      },
      info3:{
        display:"flex",
        flexDirection:"column",
        marginTop:26,
      },
    
})

export default PatientProfile;