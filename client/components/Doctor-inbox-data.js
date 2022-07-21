import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "react-native-ratings";
import { FlatList } from "react-native";
import { DATA } from "../constants/Doctor-inboxvalues";
import { AuthContext } from "../Context/AuthContext";
import { Avatar } from "react-native-paper";

const DoctorCurrentMessages = (props) => {
  console.log(props, "props");

  const [currentData, setCurrentData] = useState();
  const [dialogbox, setDialogbox] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const modifiedData = props?.currentAppointmnents?.map((data) => {
      return {
        date: `${new Date(data.date).getDate()} / ${new Date(
          data.date
        ).getMonth()} / ${new Date(data.date).getFullYear()}`,
        symptoms: data.symptoms[0].name,
        info: data.qna[0].answer,
        patient: data.patient.name,
        qna: data.qna,
        appointmentInfo: data._id,
        doctor: userInfo,
      };
    });

    console.log(modifiedData, "modifiedData");
    setCurrentData(modifiedData);
  }, [props.currentAppointmnents]);

  const openDialog = (data) => {
    props.setDialogbox(true);
    props.currentPatient(data);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openDialog(item)}>
        <View style={styles.main}>
          {/* <Text style={styles.date1}>{item.date}</Text> */}
          <View style={styles.mainouter}>
            <View style={styles.inner}>
              <View style={{left:10}}>
              {!item?.profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={65}
                label={item.patient[0]}
                color="#fff"
              />
            ) : (
              <Image
                style={styles.image2}
                source={
                  item.profilePicture
                    ? item.profilePicture
                    : require("../assets/icon.png")
                }
              />
            )}
                <Text style={{ left:-13,justifyContent:"center",alignItems:"center",fontWeight:"500",fontSize:16 }}> {item.patient}</Text>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ left:-19,display: "flex", flexDirection: "column" }}>
                  <Text style={{marginBottom:18,marginTop:10,fontSize:14,fontWeight:"400",color:"#718096"}}>Date: {item.date}</Text>
                  <Text >Symptoms: {item.symptoms}</Text>
                  <Text style={{fontSize:16,fontWeight:"400",height:44}}>More Information: {item.qna[0].answer}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal={false}
      data={currentData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  date1: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 17,
    marginBottom: 7,

  },
  
  down: {
    width: 180,
    height: 60,
    marginTop: 19.71,
  },
  mainouter: {
    display: "flex",
    width: 343,
    height: 150,
    borderWidth: 0.7,
    borderColor: "gray",
    
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center"
    
  },
  main: {
    display: "flex",
    flex: 1,
    marginTop:22
  },
  inner: {
    display: "flex",
    flexDirection: "row",
  },
  image2: {
    width: 86,
    height: 86,
    borderRadius:100,
    
  },
});
export default DoctorCurrentMessages;
