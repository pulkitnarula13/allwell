import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Chip } from "react-native-paper";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AppointmentCard from "../../components/AppointmentCard";
import DetailCardHome from "../../components/DetailCardHome";
import * as moment from "moment";
import axios from "axios";
import { BASE_URL_DEV } from "@env";

const DoctorHome = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [activeDoctorStatus, setActiveDoctorStatus] = useState("Active");
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [urgentAppointments, setUrgentAppointments] = useState([]);

  const [inboxDetail, setInboxDetail] = useState([]);

  const [waitingList, setWaitingList] = useState([]);

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

      // const modifiedData = data.data.data.map((val) => {
      //   val.date = moment(val.date).format("ll");
      //   return val;
      // });
      setPatientAppointments(data.data.data);
  
      const confirmedAppointments = data.data.data.filter(
        (data) => data.confirmed && !data.cancelled
      );
      setConfirmedAppointments(confirmedAppointments);
  
      const urgentAppointments = data.data.data.filter((data) => data.urgent && !data.completed && !data.confirmed && !data.cancelled);
      setUrgentAppointments(urgentAppointments);
  
      const waitingList = data.data.data.filter((data) => !data.confirmed && !data.cancelled && !data.urgent);
      setWaitingList(waitingList);
  
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getPatientAppointments();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text>Welcome, Dr. {userInfo.name}</Text>
          <Chip>{activeDoctorStatus}</Chip>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={confirmedAppointments}
            renderItem={AppointmentCard}
            keyExtractor={(item) => item.createdAt}
          />
        </View>
        <View style={styles.inboxContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('Doctor-Inbox')}>
                  <DetailCardHome
                    item={inboxDetail}
                    config={{
                      icon: "message",
                      title: "Inbox",
                      type: "solid",
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('Doctor-Waiting-List', {
                  waitingList
                })}
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

                <View>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('Doctor-Urgent', {
                    urgentAppointments
                  })}
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
                <View>
                  <TouchableOpacity style={styles.reviewButton}>
                    <Text style={styles.review}>Review</Text>
                  </TouchableOpacity>
                </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    gap: 12,
  },
  inboxContainer: {
    display: "flex",
    gap: 16,
  },
  reviewButton: {
    borderColor: "#74CBD4",
    borderWidth: "1px",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    paddingLeft: 10,
  },
  review: {
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DoctorHome;
