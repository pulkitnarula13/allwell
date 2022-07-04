import { View, Text } from "react-native";
import React from "react";
import WaitingCard from "../../components/WaitingCard";

const DoctorUrgent = (props) => {
  return (
    <View>
      {props.route.params.urgentAppointments.map((data, index) => {
        return <WaitingCard key={index} item={data} />;
      })}
    </View>
  );
};

export default DoctorUrgent;
