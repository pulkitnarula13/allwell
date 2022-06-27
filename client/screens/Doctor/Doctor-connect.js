import {View, Text,StyleSheet,Dimensions, Image,FlatList} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
let Screenheight = Dimensions.get("window").height;


const DATA = [
    {
      name: 'Kapil',
      image: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
    {
        name: 'Prabhjyot',
        image: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
    {
        name: 'Add Patient',
        image: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
  ];

  const DATA1 = [
    {
      
      image1: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
    {
        
        image1: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
    {
        
        image1: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
    {
        
        image1: '/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png',
    },
  ];


  const Item = ({ name,image }) => (
    <View style={styles.item}>
        <Image style={styles.image1} source= {require('/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png')} resizeMode='center' />
      <Text style={styles.name1}>{name}</Text>
    </View>
  );
  const Item1 = ({ image1 }) => (
    <View style={styles.item}>
        <Image style={styles.image2} source= {require('/Users/pulkit/Documents/Langara/Sem4/Capstone Project/Project/allwell/client/assets/icon.png')} resizeMode='center' />
     
    </View>
  );

const Connect = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} image={item.image} />
    );
        const renderItem1 = ({ item }) => (
            <Item1  image1={item.image1} />
      );

    
return(
    <View style={styles.outerview}>

    <View style={styles.headingview}>
        <Text style={styles.headingtextview}>Connect With A Doctor</Text>
    </View>
    <View style={styles.subheadingview}>
        <Text style={styles.subheadingtextview}>Choose a patient</Text>
    </View>
    <View>
    <FlatList
        horizontal = {true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        
      />
      </View>

      <View style={styles.symptoms}>
        <Text style={styles.subheadingtextview}>Selected Symptoms</Text>
      </View>
      <View>
      <FlatList
        horizontal = {true}
        data={DATA1}
        renderItem={renderItem1}
        keyExtractor={item => item.image1}
      />
      </View>

      <View style={styles.speciality}>

        <Text style={styles.subheadingtextview}>Selected Speciality</Text>
        <Text style={styles.subheadingtextview1}>Neurologists</Text>
      </View>
      <View style={{alignItems:'center'}}>
      <Button style={styles.availablebtn} mode="contained" onPress={() => console.log('Pressed')}>
    Available Doctor
  </Button>

  <Button style={styles.availablebtn1} mode="contained" onPress={() => console.log('Pressed')}>
    Available Doctor
  </Button>
      </View>


    </View>


)};

const styles = StyleSheet.create({

    
    outerview:{
        backgroundColor: "#fff",
        height:Screenheight*1.4,
        display:'flex',
        flex:1,
        padding:32
        
    },
    availablebtn:{
        backgroundColor:"#D9D9D9",
        borderRadius:10,
        width:282,
        height:45,
        justifyContent:'center',
        marginTop:68,
        fontWeight:'500',
        fontSize:17,
        

    },
    availablebtn1:{
        backgroundColor:"#ffff",
        borderRadius:10,
        borderWidth:1,
        borderColor:"black",
        width:282,
        height:45,
        justifyContent:'center',
        marginTop:18,
        fontWeight:'500',
        fontSize:17,
        

    },
    subheadingtextview1:{
        fontWeight:'700',
        fontSize:16,
        lineHeight:28,
        textAlign:'center',
        marginTop:14,
        width:100,
        height:28
    },
    speciality:{
        marginTop:18
    },
    symptoms:{
        // position:'absolute',
        // top:400  
        marginTop:24

    },
   
    image1:{
        width:92,
        height:92,
        
    },
    image2:{
        width: 67,
        height: 67,
        borderRadius: 50
        
    },
    name1:{
        width:74,
        height:24,
        textAlign:'center'
    },
    item:{
        display:'flex',
        flexDirection:'column',
        marginRight:21,
        marginTop:24

    },
    headingview:{
        marginTop:50,  
        alignItems:'center'
    },
    headingtextview:{
        fontWeight:"700",
        fontSize:22,
        lineHeight:28
    },
    subheadingview:{
        marginTop:96,
    },
    subheadingtextview:{
        fontWeight:"600",
        fontSize:20,
        lineHeight:22
    }


});
export default Connect