// import React, { useState } from "react";
// import Stepper from "react-native-stepper-ui"
// import CreatingAccount1 from "../../components/CreatingAccount1";
// import { Text, View, Dimensions, StyleSheet } from "react-native";

// const { width, height } = Dimensions.get("window");

// const MyComponent = (props) => {
//     return (
//       <View>
//         <Text>{props.title}</Text>
//       </View>
//     );
//   };

// const content = [
//     <CreatingAccount1  />,
//     <CreatingAccount1  />,
//     <CreatingAccount1  />

//   ];

// const Medical_document = () => {
//   const [currentposition, setcurrentposition] = useState(0);

// //   const changepage = () => {
// //     setcurrentposition(currentposition + 1);
// //   };

//   return (
//     <View style={styles.outerview}>
//

//       <View style={styles.indicatorContainer}>
//       <Stepper
//         active={currentposition}
//         content={content}
//         onNext={() => setcurrentposition((p) => p + 1)}
//         onBack={() => setcurrentposition((p) => p - 1)}
//         onFinish={() => Alert.alert("Finish")}
//       />
//       </View>
//       {/* <View>
//         <CreatingAccount1 />
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   firstHeading: {
//     fontSize: 24,
//     fontWeight: "600",
//     lineHeight: 29.05,
//     textAlign: "center",
//   },
//   outerview: {
//     backgroundColor: "#FFFFFF",
//     display: "flex",
//     height: height,
//     flex: 1,
//     padding: 32,
//   },
//   indicatorContainer: {
//     height: 22,
//     width: 348,
//     padding: 20,
//     margin: 15,
//     elevation: 10,
//     borderRadius: 20,

//   },
//   accountHeading: {
//     fontSize: "20px",
//     fontWeight: "600",
//     color: "gray",
//     marginTop: 20,
//   },
//   accountHeading1: {
//     fontSize: 16,
//     fontWeight: "400",
//     color: "#718096",
//     lineHeight: 19.36,
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   accountImage: {
//     width: 302,
//     height: 194,
//     marginRight: 21,
//   },
//   buttonview: {
//     marginTop: 76,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   imageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default Medical_document;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CreatingAccount1 from "../../components/CreatingAccount1";
import Stepper from "react-native-stepper-ui";
import CreatingAccount2 from "../../components/CreatingAccount2";
import CreatingAccount3 from "../../components/CreatingAccount3";



const Medical_document = (props) => {
  const [active, setActive] = useState(0);

  const content = [
    <CreatingAccount1 />,
    <CreatingAccount2 />,
    <CreatingAccount3 {...props} />,
  ];

  return (
    <View style={{ marginVertical: 50, marginHorizontal: 60 }}>
      <Text style={styles.firstHeading}>Creating Account</Text>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => alert("Finish")}
        onNext={() => setActive((p) => p + 1)}
        buttonStyle={() => {
          styles.buttonstyle;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    width: 302,
    height: 45,
    justifyContent: "center",
  },
  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
    marginBottom: 24,
  },
});

export default Medical_document;
