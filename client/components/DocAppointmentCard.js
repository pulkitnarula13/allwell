import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import moment from "moment";
import { ScrollView } from "react-native";

const DocAppointmentCard = ({ item }) => {
//     console.log(item.date)
//    var newdate = new Date((item.date))
   
return(

    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Info-Patient")}>
            <View style={styles.viewPatientMeeting}>
                <Text style={styles.textPatientMeetingTime}>
                    11:00 AM - 12:00 PM
                </Text>
                <View style={styles.viewDividerLine} />
                <View style={styles.viewPatientData}>
                    <Image
                        style={styles.imagePatient}
                        source={require("../assets/icon.png")}
                        resizeMode="contain" />
                    <Text style={styles.textPatientName}>Imran Syahir</Text>
                </View>
            </View>
        </TouchableOpacity>
        
        <View style={styles.viewMeeting}>
            <Text style={styles.textMeetingTime}>12:00 PM - 1:00 PM</Text>
            <View style={styles.viewDividerLine} />

            <View style={styles.viewButtons}>
                <Text
                    style={styles.textAvailable}
                    onPress={() => console.log("Available Pressed")}
                >
                    Available
                </Text>
                <Button
                    style={styles.btnBookSchedule}
                    mode="contained"
                    onPress={() => props.navigation.navigate("AcceptPatientSchedule")}
                >
                    <Text style={styles.textButton}>Book Schedule</Text>
                </Button>
            </View>
        </View>

    </View>
)};
            
const styles = StyleSheet.create({


    viewDataContainer: {
        backgroundColor: "#fcfcfc",
        // paddingTop: 20,
        display: "flex",
        flexDirection: "coloumn",
        alignItems: "center",
        justifyContent: "space-around",
    },
    viewDividerLine: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 10,
        paddingBottom: 10,
    },
    viewPatientMeeting: {
        width: 300,
        marginTop: 20,
        backgroundColor: "white",
        padding: 15,
        color: "black",
        borderColor: "#CBD5E0",
        borderWidth: 1,
        borderRadius: 20,
    },
    textPatientMeetingTime: {
        color: "black",
        fontSize: 18,
    },
    viewPatientData: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
    },
    imagePatient: {
        width: 60,
        height: 60,
    },
    textPatientName: {
        paddingLeft: 20,
        paddingTop: 5,
        fontSize: 24,
        color: "black",
        fontWeight: "600",
    },
    viewMeeting: {
        marginTop: 20,
        width: 300,
        backgroundColor: "white",
        padding: 15,
        color: "black",
        borderColor: "#CBD5E0",
        borderWidth: 1,
        borderRadius: 20,
    },
    textMeetingTime: {
        color: "black",
        fontSize: 18,
    },
    viewButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    textButton: {
        fontSize: 14,
        textTransform: "capitalize",
        color: "white",
    },
    textAvailable: {
        fontSize: 18,
        fontWeight: "400",
        paddingTop: 10,
    },

    btnBookSchedule: {
        width: 150,
        height: 40,
        backgroundColor: "#74CBD4",
        borderRadius: 30,
    },
});
              
export default DocAppointmentCard;
              