import { View, Text } from 'react-native'
import React from 'react'

const availableDoctorCard = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}

export default availableDoctorCard