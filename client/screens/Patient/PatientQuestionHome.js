import { View, Text } from "react-native";
import React from "react";

const PatientQuestionHome = () => {

  const [qnaList, setqnaList] = useState([{
    question: "What is wrong ?",
    answer: "I am feeling headache"
  }, 
  {
    question: "What is wrong ?",
    answer: "I am feeling headache"
  }, 
  {
    question: "What is wrong ?",
    answer: "I am feeling headache"
  }, 
  {
    question: "What is wrong ?",
    answer: "I am feeling headache"
  }, 
  {
    question: "What is wrong ?",
    answer: "I am feeling headache"
  }, 
  {
    question: "Do you need medication ?",
    answer: "Yes please"
  },
]);

  return (
    <View>
        <Text>hello</Text>
    </View>
  );
};

export default PatientQuestionHome;
