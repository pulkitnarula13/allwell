import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { React, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Chip } from "react-native-paper";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { AirbnbRating, Rating } from "react-native-ratings";
import axios from "axios";
import AppointmentContext from "../../Context/AppointmentContext";

import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";

const DoctorInfo = (props) => {
  let Screenheight = Dimensions.get("window").height;

  const [dialogbox, setDialogbox] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [doctorReviewText, setDoctorReviewText] = useState();
  const [doctorInfo, setDoctorInfo] = useState();
  const { appointmentData, setAppointmentData } =
    useContext(AppointmentContext);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getDoctorInfoById();
  }, []);

  const getDoctorInfoById = async () => {
    const response = await axios.get(
      `${BASE_URL_DEV}/doctors/${props.route.params.id}`
    );
    console.log(response.data.data, "response");
    setDoctorInfo(response.data.data);
  };

  const doctorSelect = () => {
    props.navigation.navigate("Patient-question-home");
    setAppointmentData({
      ...appointmentData,
      doctor: props.route.params.id,
    });
  };

  const specialityRender = (props) => {
    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/icon.png")}
          resizeMode="contain"
        />
        <Text style={styles.text1}>{props?.item.name}</Text>
      </View>
    );
  };

  const submitData = async () => {
    let data = {
      rating: starRating,
      feedback: doctorReviewText,
      doctor: props.route.params.id,
      patient: userInfo.id,
    };

    console.log(`${BASE_URL_DEV}/review`);
    try {
      const response = await axios.post(`${BASE_URL_DEV}/review/doc`, data, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      Alert.alert("Success", "Succesfully reviewed the doctor");
      setDialogbox(false);
    } catch (error) {
      Alert.alert("Error", error.message);
      setDialogbox(false);
    }
  };

  return (
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 8,
          alignItems: "center",
          height: Screenheight * 1.15,
          display: "flex",
          flex: 1,
        }}
      >
        <View style={styles.imageview}>
          {!doctorInfo?.profilePicture ? (
            <View style={styles.defaultImage}>
              <Text style={styles.defaultImageText}>{doctorInfo?.name[0]}</Text>
            </View>
          ) : (
            <Image
              style={styles.imgstyle}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={{ width: 346, marginTop: 12 }}>
          <View style={styles.containerdata15}>
            <View>
              <Text style={styles.heading1}>
                Dr. {doctorInfo ? doctorInfo.name : ""}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Rating
                type="star"
                startingValue={doctorInfo?.rating}
                ratingCount={5}
                readonly={true}
                imageSize={15}
              />
              <Text style={{ marginLeft: 8 }}>{doctorInfo?.rating}</Text>
            </View>
          </View>
          <View style={styles.containerdata16}>
            <View>
              {doctorInfo?.address ? (
                <Text>
                  {doctorInfo.houseNumber} {doctorInfo.city}{" "}
                  {doctorInfo.province}
                </Text>
              ) : (
                <Text>Vancouver</Text>
              )}
            </View>
          </View>

          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Introduction
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", opacity: 0.6 }}>
              {doctorInfo?.doctorDescription}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              Specialities
            </Text>
            <View style={styles.chip}>
              {doctorInfo?.specialities.map((speciality, index) => {
                return (
                  <Chip style={styles.chipItem} key={index}>
                    {speciality.name}
                  </Chip>
                );
              })}
            </View>
          </View>

          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Certifications
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} Patient Care Technician
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} Certified Clinical Medical Assistant (CCMA)
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Languages
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} English
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} French
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              height: Screenheight,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 30,
                backgroundColor: "#74CBD4",
                width: 282,
                height: 45,
                justifyContent: "center",
                marginTop: 16,
                alignItems: "center",
              }}
              mode="contained"
              onPress={doctorSelect}
            >
                <Text style={{ color: "#fff" }}>Connect</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDialogbox(true)}
              style={{
                borderRadius: 30,
                borderColor: "#74CBD4",
                color: "#74CBD4",
                borderWidth: "2px",
                width: 282,
                height: 45,
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#74CBD4"}}>Write a review</Text>
            </TouchableOpacity>
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
              <View style={styles.viewDoctorReviewModal}>
                <View style={styles.viewDoctorReviewModalBox}>
                  <Text style={styles.textModalHeading}>Write a Review</Text>

                  <Text style={styles.textModalRating}>
                    Rate your experience with the doctor
                  </Text>

                  <View style={styles.viewDoctorStarRating}>
                    {/* <Rating
                      type="star"
                      startingValue={starRating}
                      ratingCount={5}
                      onSwipeRating={(starRating) => setStarRating(starRating)}
                      onFinishRating={(starRating) => setStarRating(starRating)}
                      imageSize={40}
                      ratingColor="#74CBD4"
                      ratingBackgroundColor="#74CBD4"
                    /> */}
                    <AirbnbRating
  count={5}
  reviews={["Terrible", "Bad", "Good", "Very Good", "Amazing"]}
  defaultRating={starRating}
  onFinishRating={(starRating) => setStarRating(starRating)}
  size={30}
  selectedColor="#74CBD4"
/>
                  </View>

                  <View style={styles.viewTextAreaContainer}>
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Write your review here"
                      style={styles.textArea}
                      onChangeText={(doctorReviewText) =>
                        setDoctorReviewText(doctorReviewText)
                      }
                      value={doctorReviewText}
                    />
                  </View>

                  <Button
                    style={styles.btnSubmitReview}
                    mode="contained"
                    // onPress={() => console.log("Review Submit Pressed")}
                    onPress={submitData}
                  >
                    <Text style={styles.textButton}>Submit</Text>
                  </Button>
                </View>
              </View>
            </DialogContent>
          </Dialog>
        </View>
      </View>
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
  chip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 4,
  },
  chipItem: {
    fontSize: 8,
    marginRight: 8
  },
  defaultImage: {
    width: 350,
    backgroundColor: "#74CBD4",
    height: 233,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  defaultImageText: {
    color: "#fff",
    fontSize: 100,
  },

  imageview: {
    width: 35,
    height: 233,
    alignItems: "center",
  },
  containerdata1: {},
  containerdata15: {
    width: 346,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  heading1: {
    fontSize: 20,
    fontWeight: "600",
  },
  viewTextAreaContainer: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: "top",

    borderRadius: 20,
    padding: 30,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#F6F6F6",
  },
  viewDoctorReviewModalBox: {
    display: "flex",
    flexDirection: "column",
    padding: 40,

    textAlign: "center",
  },
  dialogStyles: {
    bottom: 0,
    marginBottom: 0,
    marginTop: "85%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  textModalHeading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  textModalRating: {
    textAlign: "center",
    fontSize: 15,
    paddingTop: 40,
    paddingBottom: 10,
    fontWeight: "600",
  },

  btnSubmitReview: {
    backgroundColor: "#74CBD4",
    borderRadius: 30,
    width: 270,
    marginBottom: 40,
    height: 40,
  },
});

export default DoctorInfo;
