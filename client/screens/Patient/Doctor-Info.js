import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { React, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { Rating } from "react-native-ratings";
import axios from "axios";
import AppointmentContext from "../../Context/AppointmentContext";
import { DocReviewContext } from "../../Context/DocReviewContext";

import { BASE_URL_DEV } from "@env";

const DoctorInfo = (props) => {
  let Screenheight = Dimensions.get("window").height;

  const [dialogbox, setDialogbox] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [doctorReviewText, setDoctorReviewText] = useState();
  const [doctorInfo, setDoctorInfo] = useState();
  const { appointmentData, setAppointmentData } = useContext(AppointmentContext);
  const { docReviewData, setDocReviewData } = useContext(DocReviewContext);

  let docId = props.route.params.id;
  
  useEffect(() => {
    getDoctorInfoById();
  }, []);

  const getDoctorInfoById = async () => {
    const response = await axios.get(
      `${BASE_URL_DEV}/doctors/${xc}`
    );
    setDoctorInfo(response.data.data);
  };


  const doctorSelect = () => {
    props.navigation.navigate("Patient-question-home");
    setAppointmentData({
      ...appointmentData,
      doctor: props.route.params.id
    })
  }

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

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          height: Screenheight * 1.15,
          display: "flex",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>Doctor Info</Text>
        </View>
        <View style={styles.imageview}>
          <Image
            style={styles.imgstyle}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ width: 346, height: 100, marginTop: 12 }}>
          <View style={styles.containerdata15}>
            <View>
              <Text style={styles.heading1}>
                Dr. {doctorInfo ? doctorInfo.name : ""}
              </Text>
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
                null
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
              {doctorInfo?.description}
            </Text>
          </View>
          <View style={{ marginTop: 19 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Specialities
            </Text>
            <View style={styles.twoimages}>

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
              {"\u2022"} Lorem Ipsum Dolor
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} Lorem Ipsum Dolor
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
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                width: 282,
                height: 45,
                justifyContent: "center",
              }}
              mode="contained"
              onPress={doctorSelect}
            >
              Connect
            </Button>

            <Button
              onPress={() => setDialogbox(true)}
              style={{
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                width: 282,
                height: 45,
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text style={styles.textWriteReview}>Write a review</Text>
            </Button>
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
                    <Rating
                      style={{ marginLeft: 13 }}
                      type="star"
                      startingValue={starRating}
                      ratingCount={5}
                      onFinishRating={(starRating) => setStarRating(starRating)}
                      imageSize={15}
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
                    onPress={() =>
                      setDocReviewData({
                        starRating,
                        doctorReviewText,
                        docId,
                      }, navigation)
                    }
                  >
                    <Text style={styles.textButton}>Submit</Text>
                  </Button>
                </View>

              </View>
            </DialogContent>
          </Dialog>
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
