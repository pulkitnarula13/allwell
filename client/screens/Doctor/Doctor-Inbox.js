import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { Tabs, TabScreen } from "react-native-paper-tabs";

import Searchbars from "../../components/searchbar";
import DoctorCurrentMessages from "../../components/Doctor-inbox-data";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import DoctorCompletedMessages from "../../components/DoctorInboxCompletedMessages";
import moment from "moment";

const DoctorInbox = ({ navigation }) => {
  const [dialogbox, setDialogbox] = useState(false);

  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [currentAppointmnents, setCurrentAppointments] = useState([]);
  const [currentPatient, setCurrentPatient] = useState();

  const { userInfo } = useContext(AuthContext);

  const getPatientAppointments = async () => {
    try {
      const data = await axios.get(
        `${BASE_URL_DEV}/appointments/doctor/${userInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      const completedAppointments = data.data.data.filter(
        (data) => data.completed && !data.cancelled
      );

      setCompletedAppointments(completedAppointments);

      const currentAppointmnents = data.data.data.filter(
        (data) => !data.completed && data.confirmed && !data.cancelled
      );

      setCurrentAppointments(currentAppointmnents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientAppointments();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: `Inbox`,
    });
  }, []);
  const windowWidth = Dimensions.get("window").width;
 

                
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Searchbars />
      </View>
      <Tabs style={{backgroundColor:"white"}}>
        <TabScreen color="black" backgroundColor="black" style={{color:"black"}}  label="Current">
          <View>
            <View
              style={{
                padding: 14,
                marginBottom: 34,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DoctorCurrentMessages
                currentPatient={(val) => {
                  setCurrentPatient(val)
                }}
                setDialogbox={(val) => setDialogbox(val)}
                currentAppointmnents={currentAppointmnents}
              />
            </View>
          </View>
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
              <DoctorCompletedMessages
                currentPatient={(val) => setCurrentPatient(val)}
                
                setDialogbox={(val) => setDialogbox(val)}
                completedAppointments={completedAppointments}
              />
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
        <DialogContent>
          <View style={styles.viewPatientDataModal}>
          
            <Text style={styles.modalDate}>{currentPatient?.date}</Text>
            {/* <View style={styles.viewDividerLine}></View> */}
            
            {!currentPatient?.profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={98}
                label={currentPatient?.patient[0]}
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
            <Text style={styles.modalName}> {currentPatient?.patient}</Text>
            <Text style={styles.modalSymptoms}>Symptoms : {currentPatient?.symptoms}</Text>

          </View>
          <View style={styles.modalButtonView} >
            <Button
              style={{ fontSize: 14, lineHeight: 33}}
              color="white"
              onPress={() => {
                console.log(currentPatient, "currentPatient");
                navigation.navigate("Chatting", {
                  qna: currentPatient.qna,
                  patient: currentPatient.patient,
                  appointmentInfo: currentPatient.appointmentInfo
                });
                setDialogbox(false)
              }}
            >View the chat</Button>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  image2: {
    width: 98,
    height: 98,
    borderRadius:100,
    
  },
  viewPatientDataModal: {
    display: "flex",
    flexDirection: "column",
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textModalStatus: {
    fontSize: 25,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
  },
  image1: {
    width: 98,
    height: 98,
    borderRadius: 49,
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

    marginLeft: 40,
    marginTop: 70,
    backgroundColor: "#74CBD4",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  dialogStyles:  {
    bottom: 0,
    marginBottom: 0,
    marginTop: "110%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  modalDate: {
    left:-100,
    paddingBottom: 51,
    fontSize: 20,
    width:129,
    fontWeight: '600'
  },

  modalName: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 14,
    paddingBottom: 3,
  },

  modalSymptoms: {
    fontSize: '13%',
  },

  viewDividerLine: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
  },

  modalButtonView: {
    width: 315,
    height: 49,
    display: "flex",
    flexDirection: "column",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    backgroundColor: "#74CBD4",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20
  }
});

export default DoctorInbox;
