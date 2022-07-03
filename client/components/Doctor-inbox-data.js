import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'


 const Doctorinboxdata = ()=> {
  return (
    <View style = {styles.main}>
    <View style={styles.mainouter}>
      <View style ={styles.inner}>
        <Text>Kapilsdaasdsada</Text>
      <Image
            style={{ width: 82, height: 82,borderRadius:50  , }}
            source={{ uri: "../assets/icon.png" }}
            resizeMode="center"
          />
      </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainouter:{
        display:"flex",
        flex:1,
        width:343,
        height:256,
        borderWidth:2,
        borderColor:"black",
        borderRadius:10,
        padding:30
    },
    main:{
        
        display:"flex",
        flex:1,
        backgroundColor:"red"
    },
    inner:{
        display:"flex",
        flexDirection:"row"
    }
})
export default Doctorinboxdata;