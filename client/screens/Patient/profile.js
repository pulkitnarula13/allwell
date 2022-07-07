import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const  profile = ()=> {
  return (
    <View style={styles.allview}>
      <ScrollView>
        <View style={styles.main}>
        <View style={styles.profileheading}>
      <Text style={styles.profiletext}>Profile</Text>
      </View>
      <View style={styles.profileheading}>
      <Button style={styles.btnsetting}>
        <Feather name="settings" size={24} color="black" />
        </Button>
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
      <Text style={styles.infotext11}>John@medico.com</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>Mobile Number</Text>
      <Text style={styles.infotext11}>+1 123 456 7890</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>MSP Number</Text>
      <Text style={styles.infotext11}>123 456 7890</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext2}>Address</Text>
      <Text style={styles.infotext11}>100 W 49th Ave, Vancouver, BC V5Y 2Z6</Text>
      </View>
      <View style={styles.info2}>
      <Text style={styles.infotext1}>Date of birth</Text>
      <Text style={styles.infotext11}>1980. 08. 18</Text>
      </View>
      <View style={styles.info3}>
      <Text style={styles.infotext13}>Short Bio</Text>
      <Text style={styles.infotext12}>Viverra orci ut in quis est pretium id. Cursus purus ut fames feugiat feugiat neque sed eu ridiculus.</Text>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{display:"flex",
    flexDirection:"row",
    justifyContent:"center"
    
},
    btnsetting:{
        marginLeft:44
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
        justifyContent:"center",
        alignItems:"center",
        marginTop:38,
        marginBottom:26,
        width:246
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
       textAlign:"center"
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

export default profile