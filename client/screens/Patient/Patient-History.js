import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";

import Searchbars from "../../components/searchbar";
import { ScrollView } from "react-native";
import Patientinboxdata from "../../components/Patient-inbox-data";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";

const PatientHistory = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);

  useEffect(() => {
    getAppointmentData();
    navigation.setOptions({
      title: `Inbox`,
    });
  }, []);

  const getAppointmentData = async () => {
    const response = await axios.get(
      `${BASE_URL_DEV}/appointments/patient/${userInfo.id}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    const confirmedAppointments = response.data.data.filter(data => data.confirmed && !data.completed && !data.cancelled);
    const completedAppointments = response.data.data.filter(data => data.confirmed && data.completed && !data.cancelled);
    setCurrentAppointments(confirmedAppointments);
    setCompletedAppointments(completedAppointments);
  }

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Searchbars />
        
      </View>
      <Tabs style={{backgroundColor:"white"}}>
        <TabScreen label="Current">
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
              <Patientinboxdata navigation = {navigation} appointments={currentAppointments} />
            </View>
          </View>
        </TabScreen>
        <TabScreen label="Completed">
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
              <Patientinboxdata  navigation = {navigation} appointments={completedAppointments} />
            </View>
          </View>

          {/* <ExploreWitHookExamples1 /> */}
        </TabScreen>
      </Tabs>
    </View>
    // <View style={styles.Header}>
    //   <View style={styles.headermain}>
    //     <View style={styles.align}>
    //       <Text style={styles.text2}>Inbox</Text>
    //       <View style={styles.btnview}>
    //         <Button style={styles.btnsetting}>
    //           <Feather name="bookmark" size={24} color="black" />
    //         </Button>
    //         <Button style={styles.btnsetting}>
    //           <Feather name="shopping-bag" size={24} color="black" />
    //         </Button>
    //       </View>
    //     </View>
    //   </View>
    //   <View>

    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
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
});

export default PatientHistory;
