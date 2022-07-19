import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Chip } from "react-native-paper";
import { FlatList, ScrollView } from "react-native";
import AppointmentCard from "../../components/AppointmentCard";
import DetailCardHome from "../../components/DetailCardHome";
import Dialog, {
  DialogButton,
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";

import * as moment from "moment";
import axios from "axios";
import { BASE_URL_DEV } from "@env";

const DoctorHome = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [activeDoctorStatus, setActiveDoctorStatus] = useState("Active");
  const [dialogbox, setDialogbox] = useState(false);
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [urgentAppointments, setUrgentAppointments] = useState([]);

  const [waitingList, setWaitingList] = useState([]);

  function changeDoctorStatus(e) {
    setActiveDoctorStatus(e);
    setDialogbox(false);
  }

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
      setPatientAppointments(data.data.data);

      const confirmedAppointments = data.data.data.filter(
        (data) => data.confirmed && !data.cancelled
      );
    setConfirmedAppointments(confirmedAppointments);

      const urgentAppointments = data.data.data.filter(
        (data) =>
          data.urgent && !data.completed && !data.confirmed && !data.cancelled
      );
      setUrgentAppointments(urgentAppointments);


      const waitingList = data.data.data.filter(
        (data) => !data.confirmed && !data.cancelled && !data.urgent
      );
      setWaitingList(waitingList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientAppointments();
  }, []);

  return (
    <ScrollView   showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.doctorname}>Welcome, Dr. {userInfo.name}</Text>
          <Chip
            selectedColor="white"
            style={styles.chipstyle}
            onPress={() => setDialogbox(true)}
          >
            {activeDoctorStatus}
          </Chip>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            horizontal={true}
            data={confirmedAppointments}
            renderItem={(item) => <AppointmentCard item={item.item} navigation={navigation} />}
            keyExtractor={(item) => item.createdAt}
          />
        </View>
        <View style={styles.inboxContainer}>
          <View
            style={{width:360, display: "flex",  flexDirection: "column", marginBottom: 11,justifyContent:"center" }}
          >
            <View style={{width:360, display: "flex", flexDirection: "row", marginBottom: 11,justifyContent:"center",alignItems:"center" }}>
            <View style={{flex:1}}>
            <TouchableOpacity
              style={{ width: 170 }}
              onPress={() => navigation.navigate("Doctor-Inbox")}
            >
              <DetailCardHome
                item={confirmedAppointments}
                config={{
                  icon: "message",
                  title: "Inbox",
                  type: "solid",
                }}
              />
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Doctor-Waiting-List", {
                  waitingList,
                })
              }
            >
              <DetailCardHome
                config={{
                  icon: "message-text-clock",
                  title: "Waiting For You",
                  type: "outline",
                }}
                item={waitingList}
              />
            </TouchableOpacity>
            </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <View style={{flex:1}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Doctor-Urgent", {
                  urgentAppointments,
                })
              }
            >
              <DetailCardHome
                item={urgentAppointments}
                config={{
                  icon: "message-text-clock",
                  title: "Urgent",
                  type: "solid",
                }}
              />
            </TouchableOpacity>
            </View>
          </View>
          </View>
          

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
              <View style={styles.viewDoctorStatusModal}>
                <Text
                  style={styles.textModalStatus}
                  onPress={() => changeDoctorStatus("Active")}
                >
                  Active
                </Text>
                <View style={styles.viewDividerLine} />

                <Text
                  style={styles.textModalStatus}
                  onPress={() => changeDoctorStatus("Busy")}
                >
                  Busy
                </Text>
                <View style={styles.viewDividerLine} />

                <Text
                  style={styles.textModalStatus}
                  onPress={() => changeDoctorStatus("Inactive")}
                >
                  Inactive
                </Text>
              </View>
            </DialogContent>
          </Dialog>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  doctorname: {
    fontWeight: "600",
    // fontFamily:"Poppins",
    fontSize: 22,
    lineHeight: 24.2,
  },
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  inboxContainer: {
    display: "flex",
    width:360,
    gap: 16,
    marginLeft: "auto",
    marginRight: "auto"
  },
  reviewButton: {
    borderColor: "#74CBD4",
    borderWidth: "1px",
    borderRadius: 10,
    height: 60,
    marginTop: 63,
    justifyContent: "center",
    paddingLeft: 10,
  },
  review: {
    fontWeight: "bold",
  },
  chipstyle: {
    width: 87,
    height: 26,
    marginRight: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#74CBD4",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 55,
    marginLeft:16,
    marginBottom: 41,
  },
  viewDoctorStatusModal: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  viewDividerLine: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dialogStyles: {
    bottom: 0,
    marginBottom: 0,
    marginTop: "120%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  textModalStatus: {
    fontSize: 25,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
  },
});

export default DoctorHome;
