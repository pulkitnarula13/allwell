import { View, Text } from "react-native";
import React from "react";
import WaitingCard from "../../components/WaitingCard";

const DoctorWaitingList = (props) => {

  return (
    <View>
      {props.route.params.waitingList.map((data, index) => {
        return <WaitingCard key={index} item={data} {...props} />;
      })}
    </View>
  );
};

export default DoctorWaitingList;
