import { List, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Questions(props) {
  const [answer, setAnswer] = useState();

  return (
    <View>
      <Text style={styles.textstyle}>{props.data}</Text>
      <TextInput
        mode="outlined"
        value={answer}
        onChangeText={(value) => {
        setAnswer(value);
          props.setAnswer(value);
        }}
        placeholder="Write your answer here"
        multiline={true}
        style={{
          width: 320,
          height: 150,
          backgroundColor: "#fff"
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 17,
    marginBottom: 4,
  },
});
