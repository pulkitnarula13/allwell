import { List, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Questions(props) {
  const [answer, setAnswer] = useState();

  return (
    <View>
      <Text style={styles.textstyle}>{props.data}</Text>
      <TextInput
      style={{borderWidth:1,borderColor:"#74CBD4",borderRadius:10,backgroundColor:"white"}}
        value={answer}
        onChangeText={(value) => {
          console.log(value, "target Value");
          setAnswer(value);
          props.setAnswer(value);
        }}
        placeholder="Write your answer here"
        multiline={true}
        height={130}
        width={330}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    fontWeight: "600",
    width:370,
    marginBottom:10,
    fontSize: 14,
  
  },
});
