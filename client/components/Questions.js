import { List, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Questions(props) {
  // const [expanded, setExpanded] = React.useState(true);
  const [answer1, setanswer1] = useState()
  // const handlePress = () => setExpanded(!expanded);
  
console.log(props.data);
  return (
    // <List.Section title="Questions">
    //   <List.Accordion
    //     title="Question 1"
    //     left={(props) => <List.Icon {...props} icon="question" />}
    //   >
    //     <TextInput
    //       style={styles.TextInput}
    //       value={answer1}
    //       placeholder="Write your answer here.."
    //       placeholderTextColor="#000000"
    //       onChangeText={(answer1) => setanswer1(answer1)}
    //       onPress={handlePress}
    //     />
    //   </List.Accordion>
    // </List.Section>
    <View>
      <Text style={styles.textstyle}>{props.data}</Text>
      <TextInput value={answer1} onChange={(answer1)=>{setanswer1(answer1)}} placeholder="Write your answer here" multiline={true} height={130}/>
    </View>
  );
}
const styles = StyleSheet.create({
  textstyle:{
    fontWeight:"700",
    fontSize:17,
    marginBottom:11
  },

})
