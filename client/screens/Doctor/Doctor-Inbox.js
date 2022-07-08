import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Image} from "react-native";
import React, { useEffect,useState } from "react";
import { Button } from "react-native-paper";
import Dialog, {
  DialogButton,
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { Feather } from "@expo/vector-icons";
import { Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";

import Searchbars from "../../components/searchbar";
import Doctorinboxdata from "../../components/Doctor-inbox-data";
import { ScrollView } from "react-native";

const DoctorInbox = ({ navigation }) => {
  const [dialogbox, setDialogbox] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: `Inbox`,
    });
  }, []);
  const windowWidth = Dimensions.get("window").width;

  function ExploreWitHookExamples() {
    return (
      <View
        style={{
          width: windowWidth,
          backgroundColor: "blue",
        }}
      >
        <Doctorinboxdata />
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Searchbars />
      </View>
      <Tabs>
        <TabScreen  label="Current">
        <TouchableOpacity
      onPress={() => setDialogbox(true)}
      >
          <View>
          <View style={{ padding:14,marginBottom:34,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Doctorinboxdata/>
          </View>
          </View>
          </TouchableOpacity>
          
        </TabScreen>
        <TabScreen label="Compeleted">
          <View
            style={{
              padding: 14,
              marginBottom: 34,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Doctorinboxdata />
            </View>
          </View>

          {/* <ExploreWitHookExamples1 /> */}
        </TabScreen>
      </Tabs>
      <Dialog
            visible={dialogbox}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: "bottom",
              })
            }
            onTouchOutside={() => {
              setDialogbox(false);
            }}
            rounded
            width={1}
            dialogStyle={styles.dialogStyles}
          >
            <DialogContent style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <View style={styles.viewDoctorStatusModal}>
                <Text
                >
                  Date
                </Text>
                <View style={styles.viewDividerLine} ></View>

                <Image style={styles.image1} source= {require('../../assets/icon.png')} resizeMode='center' />
                <Text
                >
                  Name
                </Text>
                <Text
                >
                  Speciality
                </Text>
                </View>
                <View style={styles.viewDividerLine} />
                <View style={styles.button} >
        <Button
        style={{fontSize:14,lineHeight:33,color:"white"}}

            color="white"
          title="View the Chat"
          
        />
        </View>
              
            </DialogContent>
          </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDoctorStatusModal: {
    display: "flex",
    flexDirection: "column",
    padding: 40,
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
  },
  textModalStatus: {
    fontSize: 25,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
  },
  image1:{
    width:98,
    height:98,
    borderRadius:49

    
},
  
  main: {
    flex: 1,
  },
  Header: {
    display: "flex",
    // flex: "1",
    // flexDirection: "column",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34,
    marginBottom: 34,
  },
  headermain: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EDF2F7",
    width: 390,
    height: 142,
  },
  btnview: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  align: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text2: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24.2,
    marginLeft: 85,
    marginTop: 19,
  },
  button: {
    width: 315,
    height: 49,
    display: "flex",
    flexDirection: "column",
    
    marginLeft:40,
    marginTop:70,
    backgroundColor:"#74CBD4",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
  },
});

export default DoctorInbox;
