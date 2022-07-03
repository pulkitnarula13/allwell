import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { StyleSheet,FlatList } from "react-native";
import { Button } from "react-native-paper";

const PatientHome = () => {
  const DATA = [
    
    {
      name: "Cough",
      image: "../../assets/icon.png",
    },
    {
      name: "Muscle Cramp",
      image: "../../assets/icon.png",
    },
    {
      name: "Sore Throad",
      image: "../../assets/icon.png",
    },
    {
      name: "Stomach Pain",
      image: "../../assets/icon.png",
    },
   
  ];
  
  const DATA1 = [
    {
      name: "Stomach Pain",
      image: "../../assets/icon.png",
    },
    {
      name: "Congestion",
      image: "../../assets/icon.png",
    },
    {
      name: "Fever1",
      image: "../../assets/icon.png",
    },
    {
      name: "Fever2",
      image: "../../assets/icon.png",
    },
  ];
  const Item = ({ name,image }) => (
    <View style={styles.item}>
      <Image
        style={{width:72,height:72}}
        source={require("../../assets/icon.png")}
        resizeMode="contain"
      />
      <Text style={styles.name1}>{name}</Text>
    </View>
  );
  let Screenheight = Dimensions.get("window").height;
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          height: Screenheight * 1.4,
          display: "flex",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>MEDICO</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>Not feeling well</Text>
        </View>

        <View
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                width: 282,
                height: 45,
                justifyContent: "center",
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Chat with a doctor
            </Button>
          </View>

          <View
            style={{
              display: "block",
              alignItems: "left",
            }}
          >
            <Text style={{
                fontSize: "18px",
                fontWeight: "bold",
                alignItems: "left"
              }}>Choose your symptons</Text>
          </View>
          
          <View
            style={{
              display: "block",
              alignItems: "left",
              height: 50,
              
            }}
          >
            <Text>To connect with specialist</Text>
          </View>
          <View>
          <FlatList
          style={{ height: 110,
            marginRight: 36,
            marginLeft: 36,}}
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={{height: 110,
            marginRight: 36,
            marginLeft: 36,
            marginBottom: 58,}}
          horizontal={true}
          data={DATA1}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
        </View>
          <View style={{display:"flex",flexDirection:"row"}}>
          <Text style={{fontWeight:"700",fontSize:16}}>Need more Describe</Text>
          <Button
              style={{
                borderRadius: 10,
                backgroundColor: "gray",
                width: 230,
                height: 40,
                justifyContent: "center",
                marginRight:30,
                borderColor:"#000000",
                borderWidth:1,
                marginLeft:20,
                marginBottom:50
          
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Try Chat Bot
            </Button>
            
          </View>
          <View style={{display:"flex",flexDirection:"row"}}>
          <View style={{width:187,height:187,borderWidth:2,display:"flex",justifyContent:"center",marginRight:10,alignItems:"center",borderColor:"black",borderRadius:8}}>
            <Image
            style={{width:72,height:72,borderRadius:100,backgroundColor:"gray"}}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
          <Text style={{fontWeight:"500",fontSize:16}}>Dr.Lora Smith</Text>
          <Text style={{fontWeight:"100",fontSize:12}}>General Phisician</Text>

            </View>
            <View style={{width:187,height:187,borderWidth:2,display:"flex",justifyContent:"center",marginRight:10,alignItems:"center",borderColor:"black",borderRadius:8}}>
            <Image
            style={{width:72,height:72,borderRadius:100,backgroundColor:"gray"}}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
          <Text style={{fontWeight:"500",fontSize:16}}>Dr.Lora Smith</Text>
          <Text style={{fontWeight:"100",fontSize:12}}>General Phisician</Text>
          
            </View>
            </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  text1: {
    width: 67,
    height: 36,
    fontSize: 10,
    lineHeight: 18,
    alignItems: "center",
  },
  twoimages: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  containernew: {
    position: "absolute",
    left: "18.46%",
    right: "18.46%",
    top: "8.65%",
    bottom: "89.1%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 26.66,
  },
  imgstyle: {
    width: 350,
    height: 233,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },

  imageview: {
    width: 35,
    height: 233,
    alignItems: "center",
  },
  containerdata1: {},
  containerdata15: {
    width: 346,
    height: 66,
    display: "flex",
  },
  heading1: {
    fontSize: 20,
    fontWeight: "600",
  },
  containerdata16: {
    width: 125,
    height: 39,
  },
});

export default PatientHome;