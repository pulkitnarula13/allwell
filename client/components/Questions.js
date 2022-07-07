import { List, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Questions(props) {
  const [answer, setAnswer] = useState();

  return (
    <View>
      <Text style={styles.textstyle}>{props.data}</Text>
      <TextInput
        value={answer}
        textC
        onChange={(event) => {
          setAnswer(event.target.value);
          props.setAnswer(event.target.value);
        }}
        placeholder="Write your answer here"
        multiline={true}
        height={130}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 11,
  },
});
