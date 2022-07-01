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
import { Col, Row, Grid } from "react-native-paper-grid";

const DoctorHome = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [activeDoctorStatus, setActiveDoctorStatus] = useState("Active");
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [inboxDetail, setInboxDetail] = useState({
    icon: "message",
    value: 4,
    title: "Inbox",
    type: "solid",
  });

  const [waitingList, setWaitingList] = useState({
    icon: "message-text-clock",
    value: 1,
    title: "Waiting For You",
    type: "outline",
  });

  const [doctorWaitingList, setDoctorWaitingList] = useState({
    icon: "message-text-clock",
    value: 12,
    title: "Waiting For Doctor",
    type: "solid",
  });

  useEffect(() => {
    setPatientAppointments([
      {
        time: "12:30 - 13:30pm",
        name: "David",
        symptoms: ["Headache", "Nausea"],
        profilePicture: require("../../assets/icon.png"),
      },
      {
        time: "12:30 - 13:30pm",
        name: "Mike",
        symptoms: ["Headache", "Nausea"],
        profilePicture: require("../../assets/icon.png"),
      },
      {
        time: "12:30 - 13:30pm",
        name: "Allen",
        symptoms: ["Headache", "Nausea"],
        profilePicture: require("../../assets/icon.png"),
      },
      {
        time: "12:30 - 13:30pm",
        name: "Jas",
        symptoms: ["Headache", "Nausea"],
        profilePicture: require("../../assets/icon.png"),
      },
    ]);
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
            data={patientAppointments}
            renderItem={AppointmentCard}
            keyExtractor={(item) => item.name}
          />
        </View>
        <View style={styles.inboxContainer}>
          <Grid>
            <Row>
              <Col>
                <TouchableOpacity>
                  <DetailCardHome item={inboxDetail} />
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("Doctor-Waiting-List")}>
                  <DetailCardHome item={waitingList} />
                </TouchableOpacity>
              </Col>
            </Row>

            <Row>
              <Col>
                <View>
                  <TouchableOpacity>
                    <DetailCardHome item={doctorWaitingList} />
                  </TouchableOpacity>
                </View>
              </Col>
            </Row>

            <Row>
              <Col>
                <View>
                  <TouchableOpacity style={styles.reviewButton}>
                    <Text style={styles.review}>Review</Text>
                  </TouchableOpacity>
                </View>
              </Col>
            </Row>
          </Grid>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "20px",
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
